//Handle redirects once app has loaded for user authentication
  var Auth0Cordova =  require('@auth0/cordova');
  var App = require('./App');

  function main() {
    var app = new App();
    function intentHandler(url) {
      Auth0Cordova.onRedirectUri(url);
    }
    window.handleOpenURL = intentHandler;
    app.run('#app');
  }

  document.addEventListener('deviceready', main);
