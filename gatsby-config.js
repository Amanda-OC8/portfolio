const myCustomQueries = {
  xs: '(min-width: 576px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 1024px)',
  l: '(min-width: 1536px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: `Amanda Ordóñez's Portfolio`,
    author: {
      name: `Amanda Ordóñez Cencerrado`,
      summaryENG: `who starts a new career as web developer after years as research in space magnetism.`,
      summarySPA: `que empieza una nueva carrera como desarrolladora web tras años como investigadora en el campo del magnetismo espacial.`,
    },
    description: `A portfolio using gatbsy.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      github: `Amanda-OC8`,
      linkedin:`amanda-ordonez-cencerrado`
    },
    keywords: ["portfolio", "html", "css", "js", "react", "front-end", "back-end"]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-image-attributes`,
            options: {

              // ?Boolean=true
              //   If true (the default), all CSS
              //   property names will be recognized
              //   as styleAttribute.
              styleAttributes: true,

              // ?Boolean=false
              //   If true, all attributes that
              //   aren't styleAttributes, will be
              //   added as data-* attributes to the
              //   image.
              dataAttributes: false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
