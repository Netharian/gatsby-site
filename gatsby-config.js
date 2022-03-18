module.exports = {
  siteMetadata: {
    siteUrl: `https://gatsbysitemain11366.gtsb.io/`,
    title: "Netharian's Website",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
