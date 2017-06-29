angular
  .module('pncApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['Group'];
function GroupsIndexCtrl(Group) {
  const vm = this;
  Group
    .query()
    .$promise
    .then((response) => {
      vm.all = response;
    });
}

// GroupsEditCtrl.$inject = ['Group', 'User', '$stateParams', '$auth', '$state', '$scope', 'filterFilter', 'GroupUser'];
// function GroupsEditCtrl(Group, User, $stateParams, $auth, $state, $scope, filterFilter, GroupUser) {
//   const vm = this;
//   vm.group = Group.get($stateParams);
//   // vm.chosenUsers = [];
//   vm.allUsers = User.query();
//   const authUserId = $auth.getPayload().userId;
//   vm.group.users = [];
//
//   Group
//     .get($stateParams)
//     .$promise
//     .then((response) => {
//       // vm.chosenUsers = response.users;
//       vm.group.users = response.users;
//       console.log('vm.chosenUsers', vm.chosenUsers);
//       console.log('vm.group.users', vm.group.users);
//     });
//
//   function filterUsers() {
//     const params = { username: vm.q };
//     vm.filtered = filterFilter(vm.allUsers, params);
//   }
//
//   $scope.$watch(() => vm.q, filterUsers);
//
//   function addUser(user) {
//     GroupUser
//       .update({ id: vm.group.id, userId: user.id}, (group) => {
//         console.log(group);
//         vm.group.users.push(user);
//         console.log(user);
//         user.group.push(vm.group.id);
//         // user.group.push(vm.group.id);
//         vm.filtered = {};
//       });
//   }
//   vm.addUser = addUser;
//
//   function removeUser(user) {
//     GroupUser
//     .delete({ id: vm.group.id, userId: user.id })
//         .$promise
//         .then(() => {
//           const indexGroup = vm.group.users.indexOf(user);
//           vm.group.users.splice(indexGroup, 1);
//         });
//   }
//   vm.removeUser = removeUser;
//
//   function groupsUpdate() {
//     console.log(vm.group);
//     vm.group
//       .$update()
//       .then(() => $state.go('groupsHome', $stateParams));
//   }
//   vm.update = groupsUpdate;
// }
