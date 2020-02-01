const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const path = require('path')
const jwt = require('jsonwebtoken')


const httpErrors = require('../http-errors')
const pool = require('../database')
const apikey = require('../uuid-apikey')
const verifyToken = require('./verifyToken')
const checkApiKeys = require('./checkApiKeys')
const checkUUID = require('./checkUUID')



router.get('/', (req,res) => {
  res.status(200).send('This is index. I\'m waiting for html manual')
})

router.post('/signup', async (req,res) => {
  
  const {applicationkey,username,email,password,startdate,enddate} = req.body
  const {apiKey,uuid} = await apikey.getNewPair()
  const salt = await bcrypt.genSalt(10)
  const cryptedPassword = bcrypt.hashSync(password,salt)
      
  try {
    const conn = await pool.getConnection()
    const user = conn.query(
      'INSERT INTO apiusers(applicationkey,username,email,password,uuid,apikey,startdate,enddate,active) VALUES((select idapplications from applications where apikey = ?),?,?,?,?,?,?,?,?)',
      [applicationkey,username,email,cryptedPassword,uuid,apiKey,startdate,enddate,true]
    )

    conn.release()

    const token = jwt.sign(
      {id: uuid},
      process.env.SECRET,
      {expiresIn: 60*60*24 }
    )

    res.status(200).json({
      uuid,
      token
    })

  } catch( err )
  {
    res.send("*** E R R O R ***\n"+err)
  }
})

router.post('/signin',checkApiKeys,checkUUID, async (req,res) => {

  try {
    const { appkey,uuid } = req.body
  
    const conn = await pool.getConnection()
    user = await conn.query(
      'SELECT u.*, a.* FROM apiusers u, applications a WHERE u.applicationkey = a.idapplications AND u.uuid = ? AND a.apikey = ?',
      [uuid,appkey]
    )

    if( user[0] !== undefined )
    {
      const token = jwt.sign(
        {id: user[0].uuid},
        process.env.SECRET,
        {expiresIn: 60*60*24 }
      )
      res.status(202).json({
        token
      })
    }
    else
    {
      res.status(404).json({
        "type" : "Client error responses",
        "code" : "404",
        "message" : "Not found",
      })
    }
  
  
  } catch( e ) {
    res.status(500).json(e)
  }
})

router.post('/signinwithemailpassword', async (req,res) => {
  const { appkey, email, password } = req.body

  try {
    const conn = await pool.getConnection()
    user = await conn.query(
      'SELECT u.*, a.* from apiusers u, applications a WHERE u.applicationkey = a.idapplications AND u.email = ? AND a.apikey = ?',
      [email,appkey], 
    )

    if( user[0] !== undefined )
    {
      if( bcrypt.compareSync(password,user[0].password) )
      {
        const token = jwt.sign(
          {id: user[0].uuid},
          process.env.SECRET,
          {expiresIn: 60*60*24 }
        )
        res.status(202).json({
          uuid: user[0].uuid,
          token
        })
      }
      else 
      {
        res.status(404).json({
          "type" : "Client error responses",
          "code" : "404",
          "message" : "Not found",
        })
      }
    }
    else
    {
      res.status(404).json({
        "type" : "Client error responses",
        "code" : "404",
        "message" : "Not found",
      })
    }

    
  } catch( e )
  {
    res.status(500).json(e)
  }

  
})



module.exports = router