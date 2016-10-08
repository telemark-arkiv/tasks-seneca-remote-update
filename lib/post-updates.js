'use strict'

const Wreck = require('wreck')
const generateToken = require('tfk-generate-jwt')
const config = require('../config')

module.exports = (payload, callback) => {
  const token = generateToken({key: config.JWT_KEY, payload: {system: 'tasks-seneca-remote-update'}})
  const options = {
    json: true,
    payload: JSON.stringify(payload),
    headers: {
      Authorization: token
    }
  }
  Wreck.post(config.REMOTE_URL, options, (error, response, payload) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, payload)
    }
  })
}
