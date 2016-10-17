angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.desserts'
      2) Using $state.go programatically:
        $state.go('tabsController.desserts');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page2
      /page1/tab2/page2
      /page1/tab3/page2
  */
  .state('tabsController.desserts', {
    url: '/page2',
    views: {
      'tab4': {
        templateUrl: 'templates/desserts.html',
        controller: 'dessertsCtrl'
      },
      'tab2': {
        templateUrl: 'templates/desserts.html',
        controller: 'dessertsCtrl'
      },
      'tab3': {
        templateUrl: 'templates/desserts.html',
        controller: 'dessertsCtrl'
      }
    }
  })

  .state('drinks', {
    url: '/page7',
    templateUrl: 'templates/drinks.html',
    controller: 'drinksCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('menuItem', {
    url: '/page9',
    templateUrl: 'templates/menuItem.html',
    controller: 'menuItemCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.icecreamRecipe'
      2) Using $state.go programatically:
        $state.go('tabsController.icecreamRecipe');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page10
      /page1/tab2/page10
      /page1/tab3/page10
  */
  .state('tabsController.icecreamRecipe', {
    url: '/page10',
    views: {
      'tab4': {
        templateUrl: 'templates/icecreamRecipe.html',
        controller: 'icecreamRecipeCtrl'
      },
      'tab2': {
        templateUrl: 'templates/icecreamRecipe.html',
        controller: 'icecreamRecipeCtrl'
      },
      'tab3': {
        templateUrl: 'templates/icecreamRecipe.html',
        controller: 'icecreamRecipeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.icecream'
      2) Using $state.go programatically:
        $state.go('tabsController.icecream');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab4/page11
      /page1/tab2/page11
      /page1/tab3/page11
  */
  .state('tabsController.icecream', {
    url: '/page11',
    views: {
      'tab4': {
        templateUrl: 'templates/icecream.html',
        controller: 'icecreamCtrl'
      },
      'tab2': {
        templateUrl: 'templates/icecream.html',
        controller: 'icecreamCtrl'
      },
      'tab3': {
        templateUrl: 'templates/icecream.html',
        controller: 'icecreamCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page12',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page13',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('orderStatus', {
    url: '/page14',
    templateUrl: 'templates/orderStatus.html',
    controller: 'orderStatusCtrl'
  })

  .state('checkout', {
    url: '/page15',
    templateUrl: 'templates/checkout.html',
    controller: 'checkoutCtrl'
  })

  .state('table', {
    url: '/page16',
    templateUrl: 'templates/table.html',
    controller: 'tableCtrl'
  })

  .state('bill', {
    url: '/page17',
    templateUrl: 'templates/bill.html',
    controller: 'billCtrl'
  })

  .state('opinion', {
    url: '/page18',
    templateUrl: 'templates/opinion.html',
    controller: 'opinionCtrl'
  })

  .state('dishStatus', {
    url: '/page19',
    templateUrl: 'templates/dishStatus.html',
    controller: 'dishStatusCtrl'
  })

$urlRouterProvider.otherwise('/page13')

  

});