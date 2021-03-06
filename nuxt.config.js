module.exports = {
  /*
  ** Headers of the page
  */
  mode: "spa",
  plugins: ["~/plugins/auth0"],
  auth0: {
    domain: "sandbox-nuxt.auth0.com",
    clientID: "RKIUPV8doMJs39VFjhnkXb4uxzpa_ZVQ"
  },
  head: {
    title: "sandbox_view_auth0",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
