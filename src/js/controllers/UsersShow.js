angular
  .module('pncApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$state', '$auth'];
function UsersShowCtrl(User, $state, $auth) {
  const vm = this;
  vm.user = User.get($state.params);

  function usersDelete() {
    $auth.logout();
    vm.user
      .$remove()
      .then(() => $state.go('register'));
  }
  vm.delete = usersDelete;
}
