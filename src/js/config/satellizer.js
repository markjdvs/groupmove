angular
  .module('pncApp')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';

  $authProvider.facebook({
    clientId: '1889990677933552',
    url: '/api/oauth/facebook'
  });
}
