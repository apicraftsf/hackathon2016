'use strict';

var util = require('util');

module.exports.listGistCommits = function listCommits(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var name = req.swagger.params.id.value || 'stranger';
    var hello = util.format('Hello, %s!', name);
    res.json(hello);
}