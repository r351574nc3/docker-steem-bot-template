'use strict'

const Promise = require('bluebird')
const steem = Promise.promisifyAll(require('steem'))
const config = require('../../config')


module.exports = {
    execute
}

function execute() {
    steem.api.getAccounts([config.user], function(err, result) {
        console.log(err, result);
      });
}