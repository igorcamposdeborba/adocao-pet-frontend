import { API_CONFIG } from './src/app/config/api.config';

const proxy = [
    {
      context: '/api',
      target: `${API_CONFIG}`,
      secure: false,
      changeOrigin: true,
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;