  
(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.item = "";
      $scope.mess = "";
 
      $scope.splitList = function(){

        var res = $scope.item.split(",");

        if($scope.item=="")
            $scope.mess="Please enter data first";
        else if(res.length <= 3)
            $scope.mess="Enjoy!";
        else if(res.length > 3)
            $scope.mess="Too much!";
      }
      
    }
    })();