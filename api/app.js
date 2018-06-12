var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var _ = require('lodash');
var validator = require('validator');
var cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(expressValidator({
    customValidators: {
        isIntList: function(value) {
            if (!_.isString(value)) {
                return false;
            }
            return _.every(value.split(','), function(v) {
                return validator.isInt(v);
            });
        }
    }
}));
app.use(cookieParser());
app.use(cors());

// Require routes
var api = require('./routes/api/index');

app.use('/api/v1/eng/', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({message: err.message});
    if (err.status != 404) {
        console.log(err.stack);
    }
});

var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
    console.log('Environment: ' + app.get('env'));
});
