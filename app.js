angular
.module('ForecastApp', [
        'ngRoute',
      ])
  .config(function($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'MainController'
        })
        .when('/404', {
                        template: '<h1> Sorry, page not found!</h1>'
                      })
        .otherwise({ redirectTo: '/404'});
  });
