(function () {
  angular
  .module('ForecastApp')
  .factory('forecast', ['$http', function($http) {
    function get5DayForecast(){
      return $http.get('http://api.wunderground.com/api/93d089f27c3c0cab/conditions/q/sc/beaufort.json');
    }

    return {
      get5DayForecast: get5DayForecast
    };

  }]);
})();
