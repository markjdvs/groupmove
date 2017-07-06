angular
  .module('pncApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$auth', '$state', '$scope'];
function RegisterCtrl($auth, $state, $scope) {
  const vm = this;
  vm.user = {};

  $scope.$watch(() => vm.user.password, () => {
    vm.regex = new RegExp(vm.user.password);
  });

  function submit() {
    if(vm.registerForm.$valid) {
      $auth.signup(vm.user)
        .then(() => $state.go('login'));
    }
    // vm.registerForm.$setUntouched();
    // vm.registerForm.$setPristine();
  }
  vm.submit = submit;
}
