(function () {
'use strict';

angular.module('foodItems', [])

.controller('noOfFoodItems', function ($scope) {
  $scope.text1 = "";
  $scope.message = "Please enter data first";

  $scope.displayMessage = function () {
    var messages = calculate($scope.text1);
    $scope.message = messages;
  };


  function calculate(string) {
    var items = string.split(",");
	var m1 = "";
	if(items.length > 3){
	m1 = "Too much!"
	}else {
	m1 = "Enjoy!"
	}
	return m1;
	};

});

})();
