angular
  .module('pncApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    if(vm.loginForm.$valid) {
      $auth.login(vm.credentials)
        .then(() => $state.go('usersShow', { id: $auth.getPayload().userId }));
    }
    // vm.loginForm.$setUntouched();
    // vm.loginForm.$setPristine();
  }

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('usersShow', { id: $auth.getPayload().userId }));
  }

  vm.submit = submit;
  vm.authenticate = authenticate;
}
