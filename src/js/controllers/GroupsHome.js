angular
  .module('pncApp')
  .controller('GroupsHomeCtrl', GroupsHomeCtrl);

GroupsHomeCtrl.$inject = ['Group', '$state', '$http'];
function GroupsHomeCtrl(Group, $state, $http) {
  const vm = this;
  vm.group = {};
  vm.listingIds = [];

  Group.get($state.params)
    .$promise
    .then((data) => {
      vm.group = data;

      let ids = [];
      vm.group.properties.forEach((property) => {
        ids.push(property.listingId);
      });

      ids = ids.join(',');

      if(ids) $http.get('/api/groups/:id/properties', { params: { id: vm.group.id, listingId: ids } })
        .then((response) => {
          vm.selected = response.data;
        });
    });

  function groupsDelete() {
    vm.group
      .$remove()
      .then(() => $state.go('groupsNew'));
  }
  vm.delete = groupsDelete;
}
