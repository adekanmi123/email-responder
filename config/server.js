var morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    cors        = require('cors'),
    lib         = require('../middleware');

module.exports = function(app){

  if ($config.env === 'development') {
    app.use(morgan('dev'));
  }

  app.use(cors());

  // app.use(lib.gateKeeper());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/images', lib.images);
  // setup all routing
  app.use('/services', require('../routes'));
  // error handler
  app.use(lib.errorHandler);
};
