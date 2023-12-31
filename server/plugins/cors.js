
'use strict'
const { default: fastify } = require('fastify')
const fp = require('fastify-plugin')
/**
 * This plugins adds some utilities to handle http errors
 *
 * @see  https://github.com/fastify/fastify-cors
 */
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('fastify-cors'), { 
        // put your options here

        // origin: 'http://localhost:5000',
          origin:"*"
      })
})
