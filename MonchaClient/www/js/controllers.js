angular.module('app.controllers', ['ionic','ngCordova'])

.controller('dessertsCtrl', ['$scope', '$stateParams', 'MenuService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService) {
  $scope.menu=[];
  MenuService.getMenu().then(function(res){
    $scope.menu=res;
  });


}])

.controller('drinksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('menuItemCtrl', ['$scope', '$stateParams', 'MenuService','$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService,$ionicModal) {
$scope.dish={};
MenuService.getDish($stateParams.id).then(function(res){
  $scope.dish =res;
});
//modal controller
$scope.getTotal=function(){
  total=0;
  if($scope.dish.quantity!=undefined){
  total= $scope.dish.price * $scope.dish.quantity;
}
  return total;
}
$ionicModal.fromTemplateUrl('templates/orderModal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function(modal) {
  $scope.modal = modal;
});
 $scope.openModal = function() {
   $scope.modal.show();
 };
 $scope.closeModal = function() {
$scope.modal.hide();
};

}])

.controller('itemRecipeCtrl', ['$scope', '$stateParams', 'MenuService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService) {
  $scope.dish={};
  MenuService.getDish($stateParams.id).then(function(res){
    $scope.dish =res;
  });

}])

.controller('icecreamCtrl', ['$scope', '$stateParams','MenuService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService) {
$scope.dish={};
MenuService.getDish($stateParams.id).then(function(res){
  $scope.dish =res;
});
}])

.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams','$state', 'userData', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, userData) {
  $scope.user = {};
    $scope.submitForm = function(user) {
    if (user.username && user.password && user.tableCode) {
      console.log("Submitting Form", user);
      //console.log($state.path);
    //$state.go('/page12')
     //$state.go('tabsController.desserts');
     userData.updateUser(user);
     $state.go('tabsController.desserts_tab4');
    } else {
      alert("Please fill out some information for the user");
    }
  };


}])

.controller('orderStatusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('checkoutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('tableCtrl', ['$scope', '$stateParams',//'ionic','ngCordova', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])

.controller('billCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('opinionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('dishStatusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller('userCtrl', ['$scope', '$stateParams','userData', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, userData) {
   $scope.user=userData.getUser();


}])
