module.exports = {
   siteMetadata: {
      title: `Zandome`,
      description: `Development apps with Zandome`,
      author: `@zandome`,
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
            name: `Zandome`,
            short_name: `zandome`,
            description: `Development apps with Zandome`,
            start_url: `/`,
            background_color: `#007297`,
            theme_color: `#007297`,
            display: `minimal-ui`,
            icon: `src/images/favicon.png`, // This path is relative to the root of the site.
         },
      },
      `gatsby-plugin-styled-components`,
      {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
               'UA-144617399-3', // Google Analytics / GA
            ],
         },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
   ],
};
