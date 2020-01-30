const { Router } = require('express')
const router = Router()
const bcrypt = require('bcryptjs')
const path = require('path')
const jwt = require('jsonwebtoken')


const httpErrors = require('../http-errors')
const pool = require('../database')
const apikey = require('../uuid-apikey')
const verifyToken = require('./verifyToken')


router.get('/', (req,res) => {
  res.status(200).send('This is index. I\'m waiting for html manual')
})

router.post('/signup', async (req,res) => {
  
  
  const {username,email,password,startdate,enddate} = req.body
  const {apiKey,uuid} = await apikey.getNewPair()
  const salt = await bcrypt.genSalt(10)
  const cryptedPassword = bcrypt.hashSync(password,salt)
      
  pool.getConnection()
    .then(async conn => {
      await conn.query(
        'INSERT INTO apiusers(username,email,password,uuid,apikey,startdate,enddate,active) VALUES(?,?,?,?,?,?,?,?)',
        [username,email,cryptedPassword,uuid,apiKey,startdate,enddate,true]
      )
        .then(user => {
          conn.release()
          const token = jwt.sign(
            {id: uuid},
            process.env.SECRET,
            {expiresIn: 60*60*23 }
          )

            res.status(200).json({
              apiKey,
              token
            })
        })
        .catch( err => {
          res.json(err)
        })
    })
    .catch( err => {
      throw new Error(err)
    })
  

})

router.post('/signin', verifyToken, async (req,res) => {
  res.send('estoy aquí')
})



module.exports = router