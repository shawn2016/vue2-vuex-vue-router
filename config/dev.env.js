var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://www.easy-mock.com/mock/5a114c20868584562f60c1fb/vue-admin"',
})
