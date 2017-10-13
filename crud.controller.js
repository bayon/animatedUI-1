


var snippet_DATA = null;
//angular.module('App', [])
app.controller('CrudCtrl',
    ['$scope','$http',  function($scope,$http) {
        $scope.method ="na";
        $scope.snippets = [];

        //RETRIEVE PERSISTED DATA or use BACKUP DEFAULT DATA
      /*  var data = localStorage.getItem('snippet_DATA');
        if (data == null) {
            $scope.snippets = snippet_DATA;
        } else {
            $scope.snippets = JSON.parse(data);
        }
*/
        $scope.entity = {}

        $scope.edit = function(index) {
            $scope.method ="update";
            $scope.entity = $scope.snippets.data[index];
            $scope.entity.index = index;
            $scope.entity.editable = true;

        }

        $scope.delete = function(index) {
            $scope.method ="delete";

            console.log('$scope.snippets[index]:',$scope.snippets.data[index]);
            var obj = $scope.snippets.data[index];
            var data = {method:$scope.method, id: obj.id, name: obj.name, descrip: obj.descrip, code:obj.code, language:obj.language};
            var endpoint = "http://localhost:8989/jppa/research/angularWiki/crud/data.php";
            $http.post(endpoint, data).then(function(msg){
                if(msg.loginSucceeded==="true"){
                    console.log(msg)
                }else{
                    console.log(msg);
                }
            });

              $scope.snippets.data.splice(index, 1);

        }

        $scope.save = function(index) {
            $scope.snippets.data[index].editable = false;
            console.log('$scope.snippets[index]:',$scope.snippets.data[index]);
            var obj = $scope.snippets.data[index];
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
            console.log(typeof $scope.snippets.data);
            console.log($scope.snippets.data);
            $scope.snippets.data.push({
                name: "",
                descrip: "",
                editable: true
            })
        }

        $("#search").click(function(){
          //console.log('click');
             var searchTerm = $("#searchTerm").val();
             var endpoint = "http://localhost:8989/jppa/research/angularWiki/angularTickets/data.php?search="+searchTerm;
             $http({
               method: 'GET',
               url: endpoint
             }).then(function successCallback(response) {
                 // this callback will be called asynchronously
                 // when the response is available
                 console.log(response);
                // $scope.data = response;
                 $scope.snippets = response;

               }, function errorCallback(response) {
                 // called asynchronously if an error occurs
                 // or server returns response with an error status.
//  $scope.data = "Request failed";
               });




        });


    }
]);
