const proxy = [
    {
      context: '/api',
      target: 'adocao-pet-frontend-production.up.railway.app',
      secure: false,
      changeOrigin: true
    }
  ];
  module.exports = proxy;