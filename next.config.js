const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/designs": { page: "/designs" },
      "/contact": { page: "/contact" },
    }
  },
  assetPrefix: !debug ? 'https://anotherplanet-io.github.io/Next-React-Components/' : '',
}
