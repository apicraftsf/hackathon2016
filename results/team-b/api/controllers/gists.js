'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  gists: gists
};

function gists(req, res) {
  // call to github API
  var since = req.swagger.params.since.value || 'stranger';
  var username = req.swagger.params.username.value || '1UnboundedSentience';
  var githubCall = request.get('https://github.com/users/' + username +'/gists&since=' + since,
    function(err, response) {
      res.send(response.body);
    }
  )
  // .on('response', function(response) {
  //   console.log(response.statusCode) // 200
  //   console.log(response.headers['content-type']) // 'image/png'
  //   console.log('penguin')
  // })
  // var gists = util.format('gistsjkhj, %s!', since);

  // // this sends back a JSON response which is a single string
  // res.json(gists);
}

