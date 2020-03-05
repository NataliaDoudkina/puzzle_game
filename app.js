var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const moment  = require('moment');
//var io = require('socket.io')();


var indexRouter = require('./routes/index');
var signInRouter = require('./routes/signIn');
var registerRouter = require('./routes/register');
var logOutRouter = require('./routes/logOut');
var puzzleActionRouter = require('./routes/puzzleAction');
var puzzleCategoryRouter = require ('./routes/puzzleCategory');
var accountSettingsRouter = require('./routes/accountSettings');
var deleteAccountRouter = require('./routes/deleteAccount');
var adminRouter = require('./routes/adminDashboard');
var reportRouter = require('./routes/reports')
var termsRouter = require('./routes/terms');
var contactRouter = require('./routes/contact');
var chatRouter = require('./routes/chat');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images/', express.static('./public/images'));
app.use(bodyParser.urlencoded({ extended: true })); 


app.use('/', indexRouter);
app.use('/signIn', signInRouter);
app.use('/register', registerRouter);
app.use('/logout', logOutRouter);
app.use('/puzzleAction', puzzleActionRouter);
app.use('/category', puzzleCategoryRouter);
app.use('/admin', adminRouter)
app.use('/accountSettings', accountSettingsRouter);
app.use('/deleteAccount', deleteAccountRouter);
app.use('/report', reportRouter);
app.use('/terms', termsRouter);
app.use('/contact', contactRouter);
//app.use('/chat', chatRouter);
app.use('/chat', chatRouter); //(io)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
