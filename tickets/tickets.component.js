angular.module('tickets').
  component('tickets', {
  templateUrl:'tickets/tickets.template.html',
  controller:['$http','$scope', function TicketsController($http,$scope){
                  //tripped up on change from this to self
                  var self = this;
                  self.orderProp = 'name';
                 /* $http.get('phones/phones.json').then(function(response) {
                       self.phones = response.data;
                       console.log("self.phones,",self.phones);
                   });*/
                   $http.get("http://localhost:8989/jppa/research/angular/animatedUI-1/data.php?read=1").then(function(response) {
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
                  /////////////////////////////////////////////////////////////////
                    $scope.method ="na";
                    $scope.snippets = [];
                    $scope.entity = {};

                    $scope.edit = function(index) {
                        $scope.method ="update";
                        console.log('update');
                         console.log( self.tickets[index]);
                        //console.log($scope.snippets.data[index]);
                        $scope.entity = self.tickets[index];
                        $scope.entity.index = index;
                        $scope.entity.editable = true;

                    }
                     $scope.delete = function(index) {
                          $scope.method ="delete";

                          console.log('$scope.snippets[index]:',self.tickets[index]);
                          var obj = self.tickets[index];
                          var data = {method:$scope.method, id: obj.id, name: obj.name, descrip: obj.descrip, code:obj.code, language:obj.language};
                          var endpoint = "http://localhost:8989/jppa/research/angularWiki/crud/data.php";
                          $http.post(endpoint, data).then(function(msg){
                              if(msg.loginSucceeded==="true"){
                                  console.log(msg)
                              }else{
                                  console.log(msg);
                              }
                          });

                            self.tickets.splice(index, 1);

                      }

                      $scope.save = function(index) {
                          self.tickets[index].editable = false;
                          console.log('$scope.snippets[index]:',self.tickets[index]);
                          var obj = self.tickets[index];
                          var data = {method:$scope.method, id: obj.id, name: obj.name, descrip: obj.descrip, code:obj.code, language:obj.language};
                          var endpoint = "http://localhost:8989/jppa/research/angularWiki/crud/data.php";
                          $http.post(endpoint, data).then(function(msg){
                              if(msg.loginSucceeded==="true"){
                                  console.log(msg)
                              }else{
                                  console.log(msg);
                              }
                          });

                          //SAVE PERSIST data in LOCAL STORAGE.
                        //  var snippet_datastring = JSON.stringify($scope.snippets);
                        //  localStorage.setItem('snippet_DATA', snippet_datastring);
                      }

                      $scope.add = function() {
                          $scope.method ="add";
                          console.log(typeof self.tickets);
                          console.log(self.tickets);
                          self.tickets.push({
                              name: "",
                              descrip: "",
                              editable: true
                          })
                      }


                  ///////////////////////////////////////////////////////////////////
               }
            ]
  });

  /*
  app.controller('CrudCtrl',
    ['$scope','$http',  function($scope,$http) {
        $scope.method ="na";
        $scope.snippets = [];

        
        $scope.entity = {}

        $scope.edit = function(index) {
            $scope.method ="update";
            $scope.entity = $scope.snippets.data[index];
            $scope.entity.index = index;
            $scope.entity.editable = true;

        }

       
*/