angular
  .module('pncApp')
  .controller('PropsIndexCtrl', PropsIndexCtrl);

PropsIndexCtrl.$inject = ['$http', '$uibModal'];
function PropsIndexCtrl($http, $uibModal) {
  const vm = this;
  vm.results = [];
  vm.area = null;
  vm.beds = null;
  vm.limit = 10;

  function getProps(){
    $http.get('/api/properties', { params: {area: vm.area, minimum_beds: vm.beds, maximum_beds: vm.beds}})
      .then((response) => {
        vm.results = response.data;
      });
  }

  function loadMore() {
    return vm.limit +=12;
  }

  function openModal(thisProp) {
    $uibModal.open({
      templateUrl: 'js/views/props/show.html',
      controller: 'PropsShowCtrl as propsShow',
      windowClass: 'app-modal-window',
      resolve: {
        selectedProp: () => {
          return thisProp;
        }
      }
    });
  }

  vm.getProps = getProps;
  vm.loadMore = loadMore;
  vm.openModal = openModal;
}
