const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');//中間層記錄日誌
//https://www.cnblogs.com/chyingp/p/node-learning-guide-express-morgan.html
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//http://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html

const users = require('./routes/users');
const api = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//將log印在 Terminal 裡
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './views')));

app.use('/', api);
app.use('/users', users);
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
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
