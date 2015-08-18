var myApp=angular.module('myApp', []);
myApp.controller('MyController', function($scope, $timeout, $interval){
	var self=this;
	var myColors = ['red', 'green', 'yellow', 'blue'];
	var simonColors = [];
	var usercheck = [];
	var usercolor = [];
	self.userSelection=[];
	
	

	function addSimonColor() {
	 if(simonColors.length == usercheck.length){
		var myRandomNumber = Math.floor(Math.random()*4);
		var myRandomColor = myColors[myRandomNumber];
		simonColors.push(myRandomColor);

		loop=simonColors.length;
		i=0;
		var looper=function(){
			if(i<loop){ self.userSelection=simonColors[i];
				i++;
				$timeout(looper,800)
			}
		}
		$timeout(looper,1000)
		console.log(simonColors);
		}else{}
	}


	$interval(function(){ 
		addSimonColor(); 
	}, 4000);


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
