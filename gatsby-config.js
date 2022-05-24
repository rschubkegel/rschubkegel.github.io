module.exports = {
  pathPrefix: "/rschubkegel.gatsby",
  siteMetadata: {
    title: `rschubkegel`,
    siteUrl: `https://rschubkegel.github.io`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark", 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};