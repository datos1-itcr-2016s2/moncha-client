angular.module('app.services', [])

.factory('MenuService', ['$q', function($q) {

  return {
    getFilms: function() {
      var deferred = $q.defer();
      var menu = [{
        id: 1,
        tittle: "pizza",
        totalTime: 30,
        ingredients: [
          "1",
          "2",
          "3"
        ],
        recipie: [{
          tittle: "Batir",
          estimatedTime: 10,
          instruction: " Batir lentamente "
        }, {
          tittle: "Picar vegetales",
          estimatedTime: 3,
          instruction: "Picar finamente el tomate"
        }, {
          tittle: "Hornear",
          estimatedTime: 20,
          instruction: "Meter al hornor precalentado a 300 grados, por 10 minutos"
        },
      ]
    },
    {
          id: 2,
          tittle: "Brownie",
          totalTime: 20,
          ingredients: [
            "4",
            "5",
            "6"
          ],
          recipie: [{
            tittle: "Batir",
            estimatedTime: 10,
            instruction: " Batir huevos y chocolate organico "
          }, {

            tittle: "Hornear",
            estimatedTime: 20,
            instruction: "Meter al hornor precalentado a 150 grados, por 10 minutos"
          }]
        },
        {
        id: 3,
        tittle: "sopa",
        totalTime: 25,
        ingredients: [
          "7",
          "8",
          "9"
        ],
        recipie: [{
          tittle: "Picar",
          estimatedTime: 10,
          instruction: " Picar vegetales frescos"
        }, {
          tittle: "hervir pasta",
          estimatedTime: 15,
          instruction: "Poner en aguar hiviendo la pasta"
        }, {
          tittle: "Mezclar",
          estimatedTime: 5,
          instruction: "Mezclar la pasta y vegetales en una taza"
        }]}

      ];

      deferred.resolve(films);
      return deferred.promise;
    },

    getDish: function(id) {
          var deferred = $q.defer();

          //temp
          var dish = menu[id-1];
          deferred.resolve(dish);
          return deferred.promise;
        }

  };

}]);
