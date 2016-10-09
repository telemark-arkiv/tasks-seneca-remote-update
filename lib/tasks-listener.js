'use strict'

const postUpdates = require('./post-updates')

module.exports = function tasksListener (options) {
  const seneca = this

  seneca.add('info:tasks, type:user', (args, done) => {
    const user = args.data.user
    const system = args.data.system
    const data = {
      user: user,
      system: system,
      data: args.data.data
    }
    postUpdates(data, (error, msg) => {
      if (error) {
        console.error(error)
      } else {
        done(null, msg)
      }
    })
  })

  return options.tag || 'tasks-seneca-remote-update'
}
