(function(){

  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.dishes = "";
    $scope.responseMessage = "";
    $scope.myClass = [];
    $scope.myClassBorder = [];

    $scope.checkIfTooMuch = function(){
      $scope.myClass.pop();
      $scope.myClassBorder.pop();
      $scope.responseMessage = "";
      if($scope.dishes.length == 0){
        $scope.responseMessage = "Please enter data first";
        $scope.myClass.push('red');
        $scope.myClassBorder.push('redBorder');
      }
      else{
        var dishesSplit = $scope.dishes.split(",");
        for(var i = 0; i < dishesSplit.length + 1; i++){
          if(dishesSplit[i] == ""){
            dishesSplit.splice(i,1);
            i = i - 1;
          }
        }
        if(dishesSplit.length <= 3){
          $scope.responseMessage = "Enjoy!";
          $scope.myClass.push('green');
          $scope.myClassBorder.push('greenBorder');
        }
        else{
          $scope.responseMessage = "Too Much!!";
          $scope.myClass.push('green');
          $scope.myClassBorder.push('greenBorder');
        }
      }
    }
  }

})();
