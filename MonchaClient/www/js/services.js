angular.module('app.services', [])

.service('MenuService', ['$http', '$q', 'ServerAPI', function($http, $q, ServerAPI) {
  return {
    menu:[],
    getMenu: function() {
      var deferred = $q.defer();
      console.log(ServerAPI.getURL);
      $http.get(ServerAPI.getURL()+"/dishes").then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data);
      });

      return deferred.promise;
    },
    getDish: function(id) {
      var deferred = $q.defer();
      $http.get(ServerAPI.getURL()+"/dishes/"+id).then(function(res) {
        //console.dir(res.data);
        deferred.resolve(res.data);
      });

      return deferred.promise;
    }
  };

}])
.service('userData', ['$http', 'ServerAPI', '$q',function($http, ServerAPI, $q) {
  return {
    user: {},
    getUser: function() {
      return this.user;
    },
    updateUser: function(username, table, type) {
      this.user.name= username;
      this.user.table= table;
      this.user.type= type;
      //var userJson = JSON.stringify(this.user);
      //alert(userJson);
    },
    setName: function(name) {
      this.user.name = name;
    },
    getName: function() {
      return this.user.name;
    },
    setToken: function(token) {
      this.user.token = token;
    },
    getToken: function() {
      return this.user.token;
    },
    setTable: function(table) {
      this.user.tableId = table;
    },
    getTable: function() {
      return this.user.tableId;
    },
    setType: function(type) {
      this.user.type = type;
    },
    getType: function() {
      return this.user.type;
    },
    login: function(user) {
      var deferred = $q.defer();
      var userJson = JSON.stringify(user);
      $http.post(ServerAPI.getURL()+"/auth/client/", userJson)
      .then(function(res) {
        //console.log("JSON RES   ",JSON.stringify(res));
        deferred.resolve(res.data);
      });
      return deferred.promise;
    }

  };
}])

.service('orderService', ['$http', 'ServerAPI', 'userData', '$q',function($http, ServerAPI, $q) {
  return {
    order:[
      {
        "dishId": 1,
        "quantity": 7,
        "comment": "Con extra queso"
      },

      {
        "dishId": 2,
        "quantity": 3,
        "comment": "Con extra NATILLA"
      }
    ],
    addSuborder: function(suborder){
      this.order.push(suborder);

    },
    postOrder: function(){

    },
    getOrder: function(){
      return this.order;

    },

  };
}])
.service('ServerAPI', [function() {
  return {
    URL: "",
    defined: false,
    checkPlatform: function(tableCode) {
      if (ionic.Platform.isIOS()) {
        this.URL = "http://moncha.herokuapp.com/api";
      } else if (ionic.Platform.isAndroid()) {
        this.URL = "http://moncha.herokuapp.com/api";

      } else {
        //this.URL = "http://192.168.0.105:8100/api";
        this.URL = "http://localhost:8100/api";
        //this.URL = "http://localhost:8100/apiNR";
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
