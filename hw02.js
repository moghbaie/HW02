var myApp=angular.module('myApp', ['ServicesModule']);
myApp.controller('MyController', function($scope, $timeout, $interval){
	var self=this;
	var myColors = ['red', 'green', 'yellow', 'blue'];
	var simonColors = [];
	var usercheck = [];
	var usercolor = [];

	function addSimonColor() {
	 if(simonColors.length == usercheck.length){
		var myRandomNumber = Math.floor(Math.random()*4);
		var myRandomColor = myColors[myRandomNumber];
		simonColors.push(myRandomColor);
		self.userSelection=myRandomColor;
		console.log(simonColors);
		/*for (var i = 0; i < simonColors.length+1; i++) {
			self.userSelection=simonColors[i];
			console.log(self.userSelection);
		};*/

		}else{}
	}


	$interval(function(){ 
		addSimonColor(); 
	}, 2000);


	self.addClick=function(colorname){
		usercolor.push(colorname);
		self.userSelection = colorname;

		if(usercolor.length==simonColors.length){
			angular.copy(usercolor, usercheck);
		
			if(angular.equals(simonColors,usercheck)){
			 self.score=usercheck.length;
			 usercolor=[];
			}else{
				simonColors=[];
				usercheck=[];
				usercolor=[];
				self.score=0;
			}
					
		}else{
		}}
});
