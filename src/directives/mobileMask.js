(function() {
  "use strict";
  angular.module("ngMobileMask").directive("mobileMask", [
    function() {
      return {
        restrict: "A,E",
        require: "ngModel",
        scope: {
          countryCode: "=",
          numberCount: "=",
          validNumbersForFirstNumber: "=",
          close: "&close"
        },
        template:
          '<div class="mobile-mask"> ' +
          '<span class="mobile-mask-plus">+{{countryCode}}</span>' +
          '<input id="{{item.id}}" class="mobile-mask-number"' +
          'ng-repeat="item in numbers"' +
          'ng-model="item.value"' +
          'ng-keyup="checkNumber(item)" />' +
          '<div class="mobile-mask-error">{{error}}</div>' +
          "</div>",
        link: function($scope, $element) {
          $scope.numbers = [];
          console.log($scope.validNumbersForFirstNumber);
          for (var i = 0; i < $scope.numberCount; i++) {
            $scope.numbers.push({ id: i });
          }

          var validationForFirstItem = function(item) {
            var result = true;
            var validNumbers = $scope.validNumbersForFirstNumber.split("-");
            var min = parseInt(validNumbers[0]);
            var max = parseInt(validNumbers[1]);
            if (parseInt(item.value) < min || parseInt(item.value) > max) {
              item.value = "";
              $scope.error = "number should be between " + min + " and " + max;
              result = false;
            }
            return result;
          };

          $scope.checkNumber = function(item) {
            var isOk = true;
            if (item.value.length > 1) {
              var stringValue = item.value.toString();
              item.value = parseInt(stringValue.substring(0, 1));
            }

            if (!parseInt(item.value)) {
              var stringValue = item.value.toString();
              item.value = parseInt(stringValue.substring(0, 1));
            }

            if (item.id === 0) {
              isOk = validationForFirstItem(item);
            }

            if (
              isOk &&
              item.id !== $scope.numbers[$scope.numbers.length - 1].id
            )
              document.getElementById(item.id + 1).focus();
          };
        }
      };
    }
  ]);
})();
