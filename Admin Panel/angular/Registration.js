// // var application = angular.module("module_name",[]);

// application.service('angularService',function($http){

//     //get
//     this.getUserList = function()
//     {
//         return $http.get('http://localhost:5000/api/user/test');
//     }

//     //post
//     this.saveUser = function(data)
//     {
//         return $http.post('http://localhost:5000/api/user/insert', JSON.stringify(data));
//     }

// })


// application.controller("Register_Page",function($scope,angularService,$window){
    
//     $scope.RegisterUser = function()
//     {
//         if($scope.password != $scope.rePassword)  
//         {
//             alert('Both password not same');
        
//         }else{
//             var userData = {
//                 name:$scope.name,
//                 email:$scope.email,
//                 mobileno:$scope.mobileno,
//                 password:$scope.password,
//                 rePassword:$scope.rePassword 
//             }
            
//             angularService.saveUser(userData).then(function(response){

//                 if(response.data.Message == "Success")
//                 {
//                     alert('Registration Successfully');
//                     $scope.name = "";
//                     $scope.email = "";
//                     $scope.mobileno  = "";
//                     $scope.password ="";
//                     $scope.rePassword ="";
//                     window.location.href = ""

//                 }else{
//                     alert(response.data.Message);
//                 }

//             })


//         } 
//     }
// })