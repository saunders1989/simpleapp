angular.module('simpleApp')
  .controller('NavController', function($scope, $location) {
    this.isActive = function (url) {
      return url === $location.path();
    };
  });
