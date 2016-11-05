angular.module('lectorctrl.scannerctrl', ['ionic','ngCordova'])
  .controller("lectorctrl.scannerctrl", ['$state', '$scope','$cordovaBarcodeScanner','userData', function($state, $scope, $cordovaBarcodeScanner, userData ){
      $scope.leer= function(){
        $cordovaBarcodeScanner.scan().then ( function(imagenEscaneada){

          //imagenEscaneada.text es un string con la informacion del QR
          data = JSON.parse(imagenEscaneada.text);

          if (data.mesa && data.tipo) {
            user = {"name": "Cliente", "table": data.mesa, "type": data.tipo};
            userData.updateUser("Cliente", data.mesa, data.tipo);
            userData.login(this.user).then(function(res){
              userData.setToken(res);
              $state.go('tabsController.desserts_tab4');
            });
          } else {
            alert("The QR is invalid");
          }


  			}, function(error){
  				alert("Error :"+ error);
  			});
      }

  } ]);
