'use strict';

const Data = require('../../../data/'),
    Bluebird = require('bluebird'),
    _ = require('lodash');


module.exports.newColiseum = (payload) => {
    let query = 'INSERT INTO coliseums(id, name, description) values($1, $2, $3)  RETURNING id';

    return Data.cockroach.insert(query, [
        Date.now(),
        payload.name,
        payload.description
    ]);
};