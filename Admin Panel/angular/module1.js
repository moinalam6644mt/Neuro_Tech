var app = angular.module("myMod",['ngRoute']);
app.config(["$routeProvider",function($routeProvider){

	$routeProvider.
	when("/teacher",{
		templateUrl:'views/teachers.html',
		controller:'register'
	}).
	when("/student",{
		templateUrl:'views/students.html',
		controller:'Emp'
	}).
	
	otherwise({
		redirectTo:'index.html'
	});

}]);

app.service('angularService',function($http){


	this.getUser = function()
	{ 
		return $http.get('http://localhost:5200/api/user/get');
	}
	this.deleteuser=function(user_id){
		return $http.get('http://localhost:5200/api/user/delete/' + user_id);
	}
})
 

app.controller("register",function($scope,angularService){

	$scope.GetUsrList = function()
	{
			angularService.getUser()
			.then(function(response){
				if(response.data.Message =="Success"){
					$scope.UserList = response.data.UserList;
				}else{
					console.log(response.data.Message);
				}
			})
	}
	
	$scope.deleteUser=function(id){
		angularService.deleteuser(id).then(function(response){
			if(response.data.Message=="Success")
			
			{
			$scope.GetUsrList();	
			}
			
		})
		
	}
	$scope.GetUsrList();
});

application.controller("Emp",function($scope,angularService){

	$scope.GetEmpList = function()
	{
		angularService.getEmployee()
			.then(function(response){
				if(response.data.Message=="Success"){
					$scope.employeeList=response.data.EmployeeList;
				}else{
					console.log(response.data.Message);
				}
			})
	}
	
	$scope.GetEmpList();
});

