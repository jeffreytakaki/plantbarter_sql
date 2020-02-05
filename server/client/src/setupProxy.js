const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/plants',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  app.use(
    '/users/findUser',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  app.use(
    '/login',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  app.use(
    '/signup',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  app.use(
    '/logout',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};