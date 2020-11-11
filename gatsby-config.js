module.exports = {
  siteMetadata: {
    title: `Webstacks Sample`,
    description: `Sample project for Webstacks application, made with Gatsby and Contentful`,
    author: `@MatthewGasin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s4ww7kz7ri5s`,
        accessToken: `x-rfZaojtcW1UpPF0uz-ucnD2h3kHzSgPbQHWvHQTKk`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `webstacks-sample`,
        short_name: `sample`,
        start_url: `/`,
        background_color: `#929292`,
        theme_color: `#929292`,
        display: `minimal-ui`,
      },
    },
  ],
}
