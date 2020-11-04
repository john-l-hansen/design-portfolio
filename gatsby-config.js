module.exports = {
  siteMetadata: {
    title: `John Hansen | Design Portfolio`,
        description: `The design portfolio of product designer John Hansen.`,
    author: `John Hansen | johnhansen.design`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
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
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'john-hansen-design.cdn', // (REQUIRED, replace with your own)
            linkResolver: () => post => `/${post.uid}`,
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/profile-catloaf-large.gif`,
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
            head: true,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
