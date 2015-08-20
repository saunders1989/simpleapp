angular.module('simpleApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/home/index.html'
      })
      .state('/about', {
        url: '/about',
        templateUrl: 'views/about/index.html',
        controller: 'AboutController',
        controllerAs: 'aboutCtrl'
      })
      .state('/services', {
        url: '/services',
        templateUrl: 'views/services/index.html',
        controller: 'ServicesController',
        controllerAs: 'servicesCtrl'
      })
      .state('/contact', {
        url: '/contact',
        templateUrl: 'views/contact/index.html',
        controller: 'ContactController',
        controllerAs: 'contactCtrl'
      });

      // if(window.history && window.history.pushState) {
      //   $locationProvider.html5Mode({
      //     enabled: true,
      //     requireBase: false
      //   });
      // }
  });
