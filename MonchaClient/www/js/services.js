angular.module('app.services', [])

.factory('MenuService', ['$http', '$q', 'ServerAPI', function($http, $q, ServerAPI) {
  return {
    menu:[],
    getMenu: function() {
      if(this.menu.length == 0){
        this.menu = this.updateMenu();
      }
      return this.menu;

    },
    updateMenu: function() {
      var deferred = $q.defer();
      console.log(ServerAPI.getURL);
      $http.get(ServerAPI.getURL()).then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data);
      });

      return deferred.promise;
    },
    getDish: function(id) {
      var deferred = $q.defer();
      var deferred = $q.defer();
      //$http.get('http://192.168.0.105:8100/api/dishes/fake').then(function(res) {
      $http.get(ServerAPI.getURL()).then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data[id - 1]);
      });

      return deferred.promise;
    }
  };

}])
.service('userData', [function() {
  return {
    user: {},
    getUser: function() {
      return this.user;
    },
    updateUser: function(user) {
      this.user = user;
    },
    setUsername: function(username) {
      this.user.username = username;
    },
    getUsername: function() {
      return this.user.username;
    },
    setPassword: function(password) {
      this.user.password = password;
    },
    getPassword: function() {
      return this.user.password;
    },
    setToken: function(token) {
      this.user.username = token;
    },
    getToken: function() {
      return this.user.token;
    },
    setTableCode: function(tableCode) {
      this.user.username = tableCode;
    },
    getTableCode: function() {
      return this.user.tableCode;
    }
  }
}])

.service('ServerAPI', [function() {
  return {
    URL: "",
    defined: false,
    checkPlatform: function(tableCode) {
      if (ionic.Platform.isIOS()) {
        this.URL = "http://moncha.herokuapp.com/api/dishes/fake";
      } else if (ionic.Platform.isAndroid()) {
        this.URL = "http://moncha.herokuapp.com/api/dishes/fake";

      } else {
        //this.URL = "http://192.168.0.105:8100/api/dishes/fake";
        this.URL = "http://localhost:8100/api/dishes/fake";
        //this.URL = "http://localhost:8100/apiNR/menu/";
      }
      this.defined=true;
    },

    getURL: function() {
      if (this.defined == false) {
        this.checkPlatform();
      }
      return this.URL;    }


    }

  }])

  /*


  checkPlatform: function() {
  if (ionic.Platform.isIOS()) {
  this.URL = "http://moncha.herokuapp.com/api/dishes/fake";
} else if (ionic.Platform.isAndroid()) {
this.URL = "http://moncha.herokuapp.com/api/dishes/fake";

} else {
this.URL = "http://192.168.0.105:8100/api/dishes/fake";
}
},
getURL: function() {
if (NOT this.defined) {
//this.checkPlatform();
}
return this.URL;
}


return {
getMenu: function() {
var deferred = $q.defer();
var menu = [{
id: 1,
title: "Pizza",
summary:" Fresca con ingrediantes organicos",
price:100,
totalTime: 30,
ingredients: [
"1",
"2",
"3"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir lentamente "
}, {
title: "Picar vegetales",
estimatedTime: 3,
instruction: "Picar finamente el tomate"
}, {
title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},
]
},
{
id: 2,
title: "Brownie",
summary:"especial 420",
price:420,
totalTime: 20,
ingredients: [
"4",
"5",
"6"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir huevos y chocolate organico "
}, {

title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 150 grados, por 10 minutos"
}]
},
{
id: 3,
title: "Sopa",
summary:"Para el dia siguiente",
price:400,
totalTime: 25,
ingredients: [
"7",
"8",
"9"
],
recipie: [{
title: "Picar",
estimatedTime: 10,
instruction: " Picar vegetales frescos"
}, {
title: "hervir pasta",
estimatedTime: 15,
instruction: "Poner en aguar hiviendo la pasta"
}, {
title: "Mezclar",
estimatedTime: 5,
instruction: "Mezclar la pasta y vegetales en una taza"
}]},



{
id: 4,
title: "Picadillo",
summary:" Picadillo tradicional",
price:100,
totalTime: 30,
ingredients: [
"1",
"2",
"3"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir lentamente "
}, {
title: "Picar vegetales",
estimatedTime: 3,
instruction: "Picar finamente el tomate"
}, {
title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear2",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear3",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear4",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},
]
},



{
id: 5,
title: "empanadas",
summary:" Empanadas de papa",
price:100,
totalTime: 30,
ingredients: [
"1",
"2",
"3"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir lentamente "
}, {
title: "Picar vegetales",
estimatedTime: 3,
instruction: "Picar finamente el tomate"
}, {
title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear2",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear3",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear4",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},
]
},



{
id: 5,
title: "Carne Asada",
summary:"Vegana al vapor",
price:100,
totalTime: 30,
ingredients: [
"1",
"2",
"3"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir lentamente "
}, {
title: "Picar vegetales",
estimatedTime: 3,
instruction: "Picar finamente el tomate"
}, {
title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear2",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear3",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},{
title: "Hornear4",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},
]
},
];

deferred.resolve(menu);
return deferred.promise;
},

getDish: function(id) {
var deferred = $q.defer();

//temp
var menu = [{
id: 1,
title: "Pizza",
summary:" Fresca con ingrediantes organicos",
price:100,
totalTime: 30,
ingredients: [
"salsa",
"pasta",
"queso"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir lentamente "
}, {
title: "Picar vegetales",
estimatedTime: 3,
instruction: "Picar finamente el tomate"
}, {
title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
},
]
},
{
id: 2,
title: "Brownie",
summary:"especial 420",
price:420,
totalTime: 20,
ingredients: [
"chocolate",
"THC",
"Caramelo"
],
recipie: [{
title: "Batir",
estimatedTime: 10,
instruction: " Batir huevos y chocolate organico "
}, {

title: "Hornear",
estimatedTime: 20,
instruction: "Meter al hornor precalentado a 150 grados, por 10 minutos"
}]
},
{
id: 3,
title: "Sopa",
summary:"Para el dia siguiente",
price:400,
totalTime: 25,
ingredients: [
"Pollo",
"Agua",
"Papas"
],
recipie: [{
title: "Picar",
estimatedTime: 10,
instruction: " Picar vegetales frescos"
}, {
title: "hervir pasta",
estimatedTime: 15,
instruction: "Poner en aguar hiviendo la pasta"
}, {
title: "Mezclar",
estimatedTime: 5,
instruction: "Mezclar la pasta y vegetales en una taza"
}]}

];
var dish = menu[id-1]

deferred.resolve(dish);
return deferred.promise;
}



};

*/
