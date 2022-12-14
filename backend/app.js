var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var http = require('http');



var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var messageRouter = require('./routes/message');

mongoose.connect('mongodb+srv://message-web-app:message@cluster0.8nqvbco.mongodb.net/?retryWrites=true&w=majority', (err) => {
  console.log(err ? err : 'Connected to Database');
});

var app = express();

var server = http.createServer(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/message', messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


server.listen(process.env.PORT,()=>{
  console.log(`server is listening on port ${process.env.PORT}`)
})
// module.exports = app;
