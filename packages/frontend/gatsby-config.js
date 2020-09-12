/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "api",
        fieldName: "api",
        url: "http://localhost:4000",
      },
    },
  ],
};
