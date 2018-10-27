module.exports = {
  siteMetadata: {
    title: 'Tianyang (Tyler) Gu',
    siteUrl: 'https://tianyanggu.github.io',
  },
  plugins: [
   'gatsby-plugin-react-helmet',
   `gatsby-plugin-catch-links`,
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
