app.controller('tableCtrl', function($scope,$http) {
    //define properties
    $http.get("http://www.forteworks.com/tickets/api.php?search=php").then(function(response){
        //get the data
        $scope.data = response.data;
        console.log($scope.data);
    });
});

app.directive('tableView', function () {
      return {
          templateUrl: 'table/table.view.html'
      };
  });
