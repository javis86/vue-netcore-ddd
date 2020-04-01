module.exports = {
  // The URL where the .Net Core app will be listening.
  // Specific URL depends on whether IISExpress/Kestrel and HTTP/HTTPS are used
  devServer: {
    proxy: 'http://localhost:5000'
  }
}
