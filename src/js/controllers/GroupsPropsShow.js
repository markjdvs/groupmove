angular
  .module('pncApp')
  .controller('GroupsPropsShowCtrl', GroupsPropsShowCtrl);

GroupsPropsShowCtrl.$inject = ['Group', 'GroupProperty','GroupPropertyNote', 'GroupPropertyImage', 'crimes',  'GroupPropertyRating', '$stateParams', '$state', '$http', '$uibModal', '$scope'];
function GroupsPropsShowCtrl(Group, GroupProperty, GroupPropertyNote, GroupPropertyImage, crimes, GroupPropertyRating, $stateParams, $state, $http, $uibModal, $scope) {
  const vm = this;
  vm.max = 5;
  vm.isReadonly = true;
  vm.isReadonlyfalse = false;
  vm.listingId = $stateParams.listing_id;
  vm.listingLat = null;
  vm.listingLon = null;
  vm.crimes = [];

  vm.labels = ['Anti Social Behaviour', 'Burglary', 'Bike Theft', 'Drugs', 'Robbery', 'Vehicle Crimes', 'Violent Crimes'];
  vm.crimes.pieCrimeData = [];

  Group.get($stateParams)
    .$promise
    .then((data) => {
      vm.group = data;
      groupsShowProp();
      vm.prop = vm.group.properties.find(obj => obj.listingId === vm.listingId);
    });

  function groupsShowProp(){
    $http.get('/api/groups/:id/properties/:listingId', { params: { id: vm.group.id, listingId: vm.listingId} })
      .then((response) => {
        vm.gps = response.data;
        vm.listingLat = vm.gps.listing[0].latitude;
        vm.listingLon = vm.gps.listing[0].longitude;
      });
  }

  function getCrimes(){
    if(!vm.listingLat) return false;
    crimes.getCrimes(vm.listingLat, vm.listingLon)
    .then((data) => {
      vm.crimes = data;
      return vm.crimes;
    });
  }

  $scope.$watch(() => vm.listingLat, getCrimes);

  function addNote() {
    GroupPropertyNote
    .save({ id: vm.group.id, listingId: vm.listingId }, vm.newNote)
    .$promise
    .then((note) => {
      vm.prop.notes.push(note);
      vm.newNote = {};
    });
  }
  vm.addNote = addNote;

  function deleteNote(note){
    GroupPropertyNote
    .delete({ id: vm.group.id, listingId: vm.listingId, noteId: note.id })
        .$promise
        .then(() => {
          const index = vm.prop.notes.indexOf(note);
          vm.prop.notes.splice(index, 1);
        });
  }
  vm.deleteNote = deleteNote;

  function addImage() {
    GroupPropertyImage
    .save({ id: vm.group.id, listingId: vm.listingId }, vm.newImage)
    .$promise
    .then((image) => {
      vm.prop.images.push(image);
      vm.newImage = {};
    });
  }
  vm.addImage = addImage;

  function deleteImage(image){
    GroupPropertyImage
    .delete({ id: vm.group.id, listingId: vm.listingId, imageId: image.id })
        .$promise
        .then(() => {
          const index = vm.prop.images.indexOf(image);
          vm.prop.images.splice(index, 1);
        });
  }
  vm.deleteImage = deleteImage;

  function addRating() {
    GroupPropertyRating
    .save({ id: vm.group.id, listingId: vm.listingId }, vm.newRating)
    .$promise
    .then((rating) => {
      vm.prop.rating.push(rating);
      vm.newRating = {};
    });
  }
  vm.addRating = addRating;

  function deleteRating(rating){
    GroupPropertyRating
    .delete({ id: vm.group.id, listingId: vm.listingId, ratingId: rating.id })
        .$promise
        .then(() => {
          const index = vm.prop.rating.indexOf(rating);
          vm.prop.rating.splice(index, 1);
        });
  }
  vm.deleteRating = deleteRating;

  function deleteProperty() {
    GroupProperty
    .delete({ listingId: vm.listingId, id: vm.group.id })
    .$promise
    .then(() => {
      $state.go('groupsHome', { id: vm.group.id });
    });
  }
  vm.deleteProperty = deleteProperty;

  function openModal(thisImage) {
    $uibModal.open({

      templateUrl: 'js/views/modals/images.html',
      controller: 'UserImageModalCtrl as userImage',
      windowClass: 'app-modal-window',
      resolve: {
        selectedImage: () => {
          return thisImage;
        }
      }
    });
  }
  vm.openModal = openModal;

}
