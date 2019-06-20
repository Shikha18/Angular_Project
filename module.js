// This creates the module
//It takes two parameters
var app= angular.module('mod', []);

app.controller('ctr', function($scope) {
	$scope.a="Welcome to angular Js";
	$scope.obj={name:"Shikha", age:22}
	$scope.url ="pic.jpg";


	$scope.show=false;

	console.log($scope.show);

	$scope.names=["Shikha", "Aman", "Naman"];


	$scope.sibling= [
	{id:1, name:"Shikha", age:22},
	{id:1, name:"Aman", age:18},
	{id:1, name:"Naman", age:15},

	];	


	//data binding
	//one-way
	$scope.n="Hello world!!";
	
}); 