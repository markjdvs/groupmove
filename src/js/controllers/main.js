angular
  .module('pncApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', 'User', '$transitions'];
function MainCtrl($rootScope, $state, $auth, User, $transitions){
  const vm = this;
  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;
    if(err.status === 401 && vm.pageName !== 'login') {
      vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  $transitions.onSuccess({}, (transition) => {
    vm.pageName = transition.$to().name;
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload()) {
      vm.currentUserId = $auth.getPayload().userId;
      User
        .query()
        .$promise
        .then((response) => {
          vm.user = response.find(obj => obj.id === vm.currentUserId);
          if (!vm.user.group) vm.currentUserGroupId = null;
          if (vm.user.group) vm.currentUserGroupId = vm.user.group.id;

        });
    }
  });

  function logout(){
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;
}
