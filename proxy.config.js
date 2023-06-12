const proxy = [
    {
      context: '/api',
      target: 'https://adocao-pet-backend-production.up.railway.app',
      secure: false,
      changeOrigin: true
    }
  ];
  module.exports = proxy;