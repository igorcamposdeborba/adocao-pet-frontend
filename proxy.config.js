const proxy = [
    {
      context: '/api',
      target: 'https://adocao-pet-backend-production.up.railway.app',
      secure: false,
      changeOrigin: true,
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;