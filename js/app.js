angular.module('simpleApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/index.html'
      })
      .when('/about', {
        templateUrl: 'views/about/index.html',
        controller: 'AboutController',
        controllerAs: 'aboutCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services/index.html'
        // controller: 'AboutController',
        // controllerAs: 'aboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact/index.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // if(window.history && window.history.pushState) {
      //   $locationProvider.html5Mode({
      //     enabled: true,
      //     requireBase: false
      //   });
      // }
  }]);
