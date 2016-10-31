angular.module('lectorctrl.scannerctrl', ['ionic','ngCordova'])
  .controller("lectorctrl.scannerctrl", function($scope,$cordovaBarcodeScanner ){
      $scope.leer= function(){
        $cordovaBarcodeScanner.scan().then ( function(imagenEscaneada){

          //imagenEscaneada.text es un string con la informacion del QR
          alert(imagenEscaneada.text)



  			}, function(error){
  				alert("Error :"+ error);
  			});
      }

  } );
