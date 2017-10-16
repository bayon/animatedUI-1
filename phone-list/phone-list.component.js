// Define the `phonecatApp` module

/*
step 2:
 HTML TAG NEEDED:   <phone-list></phone-list>

angular.module('phoneList').
  component('phoneList', {
  templateUrl:'phone-list/phone-list.template.html',
  controller: function PhoneListController(){
    this.phones = [
        {
          name: 'Nexus SMZ',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    this.orderProp = 'age';
  }
});
*/
/*
step 3:
 HTML TAG NEEDED:   <phone-list></phone-list>
*/
angular.module('phoneList').
  component('phoneList', {
  templateUrl:'phone-list/phone-list.template.html',
  controller:['$http', function PhoneListController($http){
    //tripped up on change from this to self
    var self = this;
    self.orderProp = 'age';
    $http.get('phones/phones.json').then(function(response) {
       self.phones = response.data;
       console.log("self.phones,",self.phones);
     });
   }
  ]
});
