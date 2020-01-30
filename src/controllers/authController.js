const { Router } = require('express')
const router = Router()
const httpErrors = require('../http-errors')
const pool = require('../database')
const bcript = require('bcryptjs')
const path = require('path')
const apikey = require('../uuid-apikey')

const {apiKey,uuid} = apikey.getNewPair()

console.log(apikey.checkPair(apiKey,uuid))


module.exports = router