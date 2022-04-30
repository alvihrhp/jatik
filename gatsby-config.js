module.exports = {
  siteMetadata: {
    title: `Jatik.id`,
    siteUrl: `https://www.jatik.id`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-plugin-sass',
    options: {
    }
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    __key: "images"
  }]
};