module.exports = {
  reactStrictMode: true,
  trailingSlash: true, // fixes internal page links https://stackoverflow.com/questions/63591544/next-js-how-to-make-links-work-with-exported-sites-when-hosted-on-aws-cloudfron
  images: {
    loader: "custom"
  }
}