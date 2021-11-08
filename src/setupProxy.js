const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/user/verify-account", {
      target: "http://localhost:5001",
    })
  );
  // app.use(
  //   createProxyMiddleware("/api/user", { target: "http://localhost:5001" })
  // );
  app.use(
    createProxyMiddleware("/auth/google", { target: "http://localhost:5001" })
  );
  app.use(
    createProxyMiddleware("/auth/user", { target: "http://127.0.0.1:5001" })
  );
};
