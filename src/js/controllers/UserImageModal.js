angular
  .module('pncApp')
  .controller('UserImageModalCtrl', UserImageModalCtrl);

UserImageModalCtrl.$inject = ['selectedImage', 'GroupPropertyImage', '$uibModalInstance'];
function UserImageModalCtrl(selectedImage, GroupPropertyImage, $uibModalInstance){
  const vm = this;
  vm.selected = selectedImage;

  function closeModal(){
    $uibModalInstance.close();
  }
  vm.closeModal = closeModal;
}
