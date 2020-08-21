var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var cakesRouter = require('./routes/cakes');
var accountRouter = require('./routes/account');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cakesRouter);
app.use('/account', accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.connect('mongodb+srv://ksaroz1992:mongodb7029@cluster0-13s3r.mongodb.net/cake?retryWrites=true&w=majority',
{ useUnifiedTopology: true, useNewUrlParser: true })
  .then(result => {
    // User.findOne().then(user => {
    //   if (!user) {
    //     const user = new User({
    //       name: 'Saroz',
    //       email: 'saroz@test.com',
    //       cart: {
    //         items: []
    //       }
    //     });
    //     user.save();
    //   }
    // });
     console.log('connected');
  })
  .catch(err => {
    console.log(err);
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
