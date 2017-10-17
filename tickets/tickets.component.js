angular.module('tickets').
  component('tickets', {
  templateUrl:'tickets/tickets.template.html',
  controller:['$http', function TicketsController($http){
                  //tripped up on change from this to self
                  var self = this;
                  self.orderProp = 'age';
                 /* $http.get('phones/phones.json').then(function(response) {
                       self.phones = response.data;
                       console.log("self.phones,",self.phones);
                   });*/
                   $http.get("http://www.forteworks.com/tickets/api.php?search=php").then(function(response) {
                       self.tickets = response.data;
                       console.log("self.tickets,",self.tickets);
                   });
                  /*
                   $http.get("http://www.forteworks.com/tickets/api.php?search=php").then(function(response){
                      //get the data
                      $scope.data = response.data;
                      console.log($scope.data);
                  });
                  */
               }
            ]
  });