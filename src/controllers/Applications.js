'use strict'
const { Router } = require('express')
const router = Router()

const pool = require('../database')
const apikey = require('../uuid-apikey')
const checkApiKey = require('./checkApiKeysParams')


router.get('/', (req,res,next) => {
  res.status(418).send("I'm waiting for the manual")
})

router.get('/application/:appkey', checkApiKey , async (req,res) => {
  const { appkey } = req.params

  try {
    
    const conn = await pool.getConnection()
    const application = await conn.query("SELECT apikey,name,create_time,end_time,active FROM applications WHERE apikey = ? and active = 1",[appkey])
    conn.release()
    if(application[0] !== undefined)
    {
      res.status(200).json(application[0])
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
    res.send('****** error *********\n'+e)
  } 

  
})

router.post('/create/', async (req,res) => {
  
  try {
    const { name } = req.body
    const now = new Date
    
    const expiration_time = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    const {apiKey} = await apikey.getNewPair()

    const conn = await pool.getConnection()
    const newApp = await conn.query(
      "INSERT INTO applications(apikey,name,create_time,end_time,active) VALUES (?,?,?,?,?)",
      [apiKey, name, now.toISOString().split('T')[0], expiration_time ,true]
    )
    
    conn.release()

    res.status(202).json({
      apikey: apiKey,
      expiration_time,
      active : true,
      affectedRows : newApp.affectedRows
    })

  } catch( e ) {
    res.send('****** error *********\n'+e)
  }

})

module.exports = router