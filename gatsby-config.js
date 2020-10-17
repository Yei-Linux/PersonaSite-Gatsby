const { createProxyMiddleware } = require("http-proxy-middleware")
const path = require(`path`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: process.env.GATSBY_LAMBDA_URL,
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
  siteMetadata: {
    title: `MySite`,
    description: `Personal Site to show my tech skills and waiting for any freelance offer`,
    author: `@YeiLinux`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mainlogo.png`
    },
    },
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    }
  ],
}
