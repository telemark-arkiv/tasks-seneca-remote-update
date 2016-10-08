'use strict'

const envs = process.env

module.exports = {
  REMOTE_URL: envs.TASKS_SENECA_REMOTE_UPDATES_URL || 'http://localhost:8000/api/updates',
  JWT_KEY: envs.TASKS_SENECA_REMOTE_UPDATE_JWT_KEY || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go'
}
