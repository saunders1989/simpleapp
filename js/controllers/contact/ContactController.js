angular.module('simpleApp')
  .controller('ContactController', ['$scope', '$filter',function($scope,$filter) {
    this.title = 'Contact';
    this.user = {};
    this.success = false;
    this.submitForm = function (form) {
      if(form.$valid) {
        this.error = false;
        this.success = true;
        this.user = {};
      } else {
        console.log('error');
      }
    }
}]);
