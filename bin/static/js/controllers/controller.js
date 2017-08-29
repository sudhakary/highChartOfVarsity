app.controller('usersController', function($scope) {
    $scope.headingTitle = "User List";
    $scope.seriesData = [95, 71, 60];
    $scope.studentname = "Sudhakar yeturi";
    $scope.disableStdChart = false;
    $scope.campusNames = ["Campus1","Campus2","Campus3","Campus4"];
    $scope.monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    $scope.StudentAvgMarks3 = [{
    	name:"Campus1",
	 data: [90,75,60]},
{
		 name:"Campus2",
	 data: [80,75,90]
},
{
	name:"Campus3",
	 data: [79,89,60]
}]
    
    $scope.StudentAvgMarks2 = [{
    	name:"Campus1",
   	 data: [90,75,60]},
   
   {
   		name:"Campus2",
   	 data: [79,89,60]
   }]
    
    $scope.StudentAvgMarks1 = [
  {
  	 name:"Campus1",
  	 data: [79,89,60]
  }]
    $scope.getStudentDetails = function(selectedCampus){
    	$scope.disableStdChart = true;
    	$scope.chartArry = [];
    	if(selectedCampus){
    	if(selectedCampus.length == 1){
    		$scope.chartArry = $scope.StudentAvgMarks1;
    	}if(selectedCampus.length == 2){
    		$scope.chartArry = $scope.StudentAvgMarks2;
    	}if(selectedCampus.length == 3){
    		$scope.chartArry = $scope.StudentAvgMarks3;
    	}
    	}
    	const color = {
        		Maths: '#006400',
        		Physics: '#9932CC',
        		Chemistry: '#E9967A',
        		Telugu: '#BDB76B',
        		English: '#D2691E',
        		Hindi: '#8FBC8F'
        	}
        const chart = Highcharts.chart('container', {
            title: {
              text: 'Student Marks Data'
            },
            chart: {
                type: 'column'
                //width: 700,
               // height: 500
            },

            xAxis: {
              categories: ['Maths', 'Physics', 'Chemistry'],
              //lineColor: '#FF0000',
              labels: {
                  formatter () {
                    return `<span style="color: ${color[this.value]}">${this.value}</span>`
                  }
                },
                title: {
                    text: 'Subjects'

                },
            },
            yAxis: {
                min: 0,
                max: 120,
                tickInterval: 20,
                //lineColor: '#FF0000',
                //lineWidth: 1,
                title: {
                    text: 'Average Marks'

                },
            },
            
            
            series: $scope.chartArry
          });
    }
    
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});
