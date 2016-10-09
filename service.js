'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const tasksListener = require('./lib/tasks-listener')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TAG || 'tasks-seneca-remote-update'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'info:tasks, type:user', model: 'observe'}
    ]
  },
  listener: {

  },
  isolated: {
    host: envs.HOST || 'localhost',
    port: envs.PORT || '3000'
  }
}

const Service = Seneca(options.listener)

if (envs.ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(tasksListener, options.compilo)
