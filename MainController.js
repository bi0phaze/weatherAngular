
(function () {
  angular
    .module('ForecastApp')
    .controller('MainController', ['$scope', 'forecast', function($scope,forecast) {

      forecast.get5DayForecast().success(function(data) {
        $scope.city = data.location.city;
                    $scope.temperature = data.current_observation.temp_c;
                    $scope.description = data.current_observation.weather;
                    $scope.wind_condition = data.current_observation.wind_string;
                    $scope.weather_icon_src = data.current_observation.icon_url;
      });
  }]);
   // body...
})();
