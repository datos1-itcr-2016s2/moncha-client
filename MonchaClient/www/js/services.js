angular.module('app.services', [])

.factory('MenuService', ['$q', function($q) {

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
      }]}

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
  /* var dish = {
  id:id,
  tittle:"Dish "+id,
  summary: "Sumary "+id,
  price:id+"00"
};         */
deferred.resolve(dish);
return deferred.promise;
}



};

}]);
