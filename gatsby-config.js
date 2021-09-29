if (typeof window !== `undefined`){
  require("dotenv").config({
  path: `.env.development`,
})}


module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personaldata",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
