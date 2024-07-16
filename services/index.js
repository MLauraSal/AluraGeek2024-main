const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const jsonServer = createProxyMiddleware({
    target: 'http://localhost:5501',
    changeOrigin: true,
  });
  return jsonServer(req, res);
};
