/**
 * @Author: John Isaacs <john>
 * @Date:   18-Aug-172017
 * @Filename: index.js
 * @Last modified by:   john
 * @Last modified time: 24-Aug-172017
 */



var express = require('express');
var router = express.Router();
var Leaderboard = require("leaderboard");

var board = new Leaderboard('Top Escapes')
board.add('borbit', 42, function(err) {
  // no arguments except err
});
board.add('borbit2', 44, function(err) {
  // no arguments except err
});
board.add('borbit3', 43, function(err) {
  // no arguments except err
});

/* GET home page. */
router.get('/', function(req, res, next) {
  board.list(function(err, list) {
    res.render('index', { title: 'Express', leaderboard: JSON.stringify(list) });
  });
});

/* GET home page. */
router.get('/add', function(req, res, next) {
  if(req.query.name){
    board.add(req.query.name, req.query.val, function(err) {
      // no arguments except err
      res.redirect('/');
    });
  }
});

/* GET home page. */
router.get('/data', function(req, res, next) {
  board.list(function(err, list) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(list));
  });  
});




module.exports = router;
