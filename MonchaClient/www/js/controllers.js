angular.module('app.controllers', ['ionic','ngCordova'])

.controller('dessertsCtrl', ['$scope', '$stateParams', 'MenuService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService) {
   $scope.recognizedText = '';
   $scope.word="*Food Name*"
  $scope.menu=[];
  MenuService.getMenu().then(function(res){
    $scope.menu=res;
  });

  $scope.record = function() {
   var recognition = new SpeechRecognition();
   recognition.onresult = function(event) {
       if (event.results.length > 0) {
           $scope.recognizedText = event.results[0][0].transcript;
           $scope.$apply($scope.word=$scope.recognizedText);


       }
   };
   recognition.start();
 };

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

.controller('menuItemCtrl', ['$scope', '$stateParams', 'MenuService','$ionicModal','$state', 'orderService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, MenuService,$ionicModal,$state, orderService) {
  $scope.order={};
  $scope.dish={};
  MenuService.getDish($stateParams.id).then(function(res){
    $scope.dish =res;
  });
  //modal controller
  $scope.getTotal=function(){
    total=0;
    if($scope.order.quantity!=undefined){
      total= $scope.dish.price * $scope.order.quantity;
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
    $scope.order.quantity=0;
    $scope.modal.hide();
  };
  $scope.confirmOrder=function(){
    if(this.getTotal()==0){

      alert("Order at least one dish.");
    }
    else{
      $scope.order.dishId = $scope.dish.id;
      alert(JSON.stringify($scope.order));
      orderService.addSuborder($scope.order);
      console.log( JSON.stringify(orderService.getOrder()));
      $scope.order={};
      alert("the dish was added to the order.")
      this.closeModal();
      $state.go('tabsController.desserts_tab4');

    }
  }

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

.controller('loginCtrl', ['$scope', '$stateParams','$state', 'userData', '$ionicSideMenuDelegate', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, userData, $ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false)
  $scope.user = {};
  $scope.tokenReady = function(){
    var result = false;
    if($scope.token){
      userData.setToken($scope.token);
      result = true;
      $state.go('tabsController.desserts_tab4');
    }
    return result
  };
  $scope.login=function(){
    if($scope.user.name && $scope.user.table)
    {    this.getToken($scope.user);
    }
    else{
      alert("Please fill all the inputs")
    }
  }
  $scope.getToken= function(user){
    userData.updateUser(user.name, user.table);
    userData.login(this.user).then(function(res){
      $scope.token = res;
      //console.log("sadsa");
      //  console.log("token",$scope.token);
      //alert("desde login   ",$scope.token);
    });

  }
  $scope.loginlol= function(){
    $state.go('tabsController.desserts_tab4');
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
