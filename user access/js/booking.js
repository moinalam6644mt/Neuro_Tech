var application = angular.module('MyApp',['ngRoute']);

application.config(["$routeProvider",function($routeProvider){
	
$routeProvider.
when("/Appointment_history",{
	templateUrl :'view/Appointment_history.html',
	controller:'doctor_ctr'
}).
redirectTo({
	templateUrl :'',
	controller:''
})
}]);
 
application.service('MyService',function($http){
	this.getEmployee=function(){
		return $http.get('http://localhost:4800/api/employee/emp');
	}
})

application.controller('doctor_ctr',function($scope,MyService){

	$scope.GetEmpList=function()
	{
   MyService.getEmployee().then(function(response){

	if(response.data.Message=="Success"){

		$scope.employee=response.data.EmployeeList;
	}else
	{
	  alert("Invalid data");
	}
})
	}
	$scope.GetEmpList();
})
