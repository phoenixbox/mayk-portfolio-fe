var Hapi = require('hapi');
var server = new Hapi.Server();
var path = require('path');
var config = require('config');
var Basic = require('hapi-auth-basic');
var _ = require('lodash');

var users = {
  mayk: {
    username: 'mayk',
    password: 'mayk',
    name: 'mayk'
  }
};

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 9000
});

server.views({
  engines: {
    html: require('swig')
  },
  path: path.join(__dirname, 'views'),
  isCached: process.env === 'production',
  compileOptions: {
    isPretty: true
  }
});

var plugins = [
  {
    register: require('good'),
    options: {
      opsInterval: 1000,
      reporters: [
        {
          reporter: require('good-console'),
          events: { log: '*', response: '*', error: '*' }
        }
      ]
    }
  }
]

var internals = {
  isProd: function() {
    return process.env.NODE_ENV === 'production';
  },
  authRoute: function(route) {
    if (internals.isProd()) {
      _.assign(route.config, { auth: 'simple' })
    }

    return route;
  }
}

if (internals.isProd()) {
  plugins = plugins.concat(Basic);
}

var validate = function (request, username, password, callback) {
  var user = users[username];
  if (!user) {
      return callback(null, false);
  }
  if (password === user.password) {
    callback(null, true, {});
  } else {
    callback(null, false);
  }
};

server.register(plugins, function(err) {
  if (err) {
    throw err;
  }

  if (internals.isProd()) {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
  }

  server.route([
    internals.authRoute({
      method: 'GET',
      path: '/',
      config: {
        handler: function(request, reply) {
          reply.view('layout.html')
        }
      }
    }),
    {
      method: 'GET',
      path: '/{p*}',
      handler: {
        directory: {
          path: './public'
        }
      }
    }
  ]);

  server.start(function() {
    console.log('server started on port');
  });
});

module.exports = server;
module.exports.internals = internals;
