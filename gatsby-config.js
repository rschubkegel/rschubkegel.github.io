module.exports = {
  pathPrefix: "/rschubkegel.gatsby",
  siteMetadata: {
    title: `rschubkegel: A Portfolio`,
    siteUrl: `https://rschubkegel.github.io`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark", 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "files",
        "path": "./static/"
      },
      __key: "files"
    }
  ]
};