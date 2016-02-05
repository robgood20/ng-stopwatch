var app = angular.module('stopwatch', []);

app.controller('AppController', function($scope, $interval){
    var timer; 
    
    $scope.counter = 0;
    
    $scope.start = function(){
        if(!timer){
            timer = $interval(goUp, 1000);   
        }
    }
    
    function goUp (){
        $scope.counter++;
    }
    
    $scope.stop= function(){
        if(timer){
            $interval.cancel(timer);
            timer = null;
        }
    }
    
})