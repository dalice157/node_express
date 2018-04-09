const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');//中間層記錄日誌
const winston = require('winston');//記錄日誌
// winston log框架
//https://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//http://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html

const webpack = require('webpack');

const api = require('./controllers/proxy');

const app = express();

require('isomorphic-fetch');

// view engine setup
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));//將 log 印在 Terminal 裡
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

// Routers
/* GET home page. */
app.get('/', function(req, res, next) {
  res.send('Hello World');
});
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
