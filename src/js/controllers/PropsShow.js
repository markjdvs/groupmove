angular
  .module('pncApp')
  .controller('PropsShowCtrl', PropsShowCtrl);

PropsShowCtrl.$inject = ['User', 'GroupProperty', '$http', '$stateParams', 'selectedProp', '$uibModalInstance'];
function PropsShowCtrl(User, GroupProperty, $http, $stateParams, selectedProp, $uibModalInstance){
  const vm = this;
  vm.selected = selectedProp;

  function storeProp(){
    const newProperty = {
      listingId: vm.selected.listing_id
    };

    GroupProperty
      .save(newProperty)
      .$promise
      .then(() => {
        vm.newProperty = {};
      });
  }
  
  function closeModal(){
    $uibModalInstance.close();
  }

  vm.store = storeProp;
  vm.closeModal = closeModal;
}
