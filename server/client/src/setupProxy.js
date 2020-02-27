const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1/plants',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/profile/plants',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/v1/profile/plant',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/users/findUser',
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
    '/api/v1/logout',
    proxy({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};