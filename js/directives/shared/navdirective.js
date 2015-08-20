angular.module('simpleApp')
  .directive('detectActiveTab', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.$on("$routeChangeSuccess", function (event, current, previous) {
            // This var grabs the tab-level off the attribute, or defaults to 1
            var pathLevel = attrs.detectActiveTab || 1;

            if($location.path() === '/') {
              var pathToCheck = $location.path() ||
                  "current $location.path doesn't reach this level";
              var tabLink = attrs.href.split('#')[pathLevel] ||
                  "href doesn't include this level";
            } else {
              var pathToCheck = $location.path().split('/')[pathLevel] ||
                  "current $location.path doesn't reach this level";
                  // This var finds grabs the same level of the href attribute
              var tabLink = attrs.href.split('/')[pathLevel] ||
                  "href doesn't include this level";
            }

            if (pathToCheck === tabLink) {
              element.parent('li').addClass('active');
            }
            else {
              element.parent('li').removeClass('active');
            }
        });
      }
    };
  });
