app.controller('usersController', function($scope,$filter) {
    $scope.headingTitle = "User List";
    $scope.seriesData = [95, 71, 60];
    $scope.studentname = "Sudhakar yeturi";
    $scope.disableStdChart = false;
    $scope.campusNames = ["Campus1","Campus2","Campus3","Campus4"];
    $scope.monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    $scope.campusTwoData = {
		  	 name:"Campus2",
		  	 data: [{
		         name: 'Jan',
		         y: 45,
		         drilldown: 'Jan'
		                
		             }, 
		             {
		                  name: 'Feb',
		         y: 67,
		         drilldown: 'Feb'
		                 
		             },
		             {
		                 name: 'March',
		                 y: 79,
		                 drilldown: 'March'
		                         
		          },
		          {
		              name: 'April',
		     y: 46,
		     drilldown: 'April'
		             
		         },
		         {
		             name: 'May',
		    y: 60,
		    drilldown: 'May'
		            
		        },
		        {
		            name: 'June',
		   y: 70,
		   drilldown: 'June'
		           
		       },
		       {
		           name: 'july',
		  y: 56,
		  drilldown: 'July'
		          
		      },
		      {
		          name: 'Aug',
		 y: 77,
		 drilldown: 'Aug'
		         
		     },
		     {
		         name: 'Sep',
		y: 84,
		drilldown: 'Sep'
		        
		    },
		    {
		        name: 'Oct',
		y: 40,
		drilldown: 'Oct'
		       
		   },
		   {
		       name: 'Nov',
		y: 34,
		drilldown: 'Nov'
		      
		  },
		  {
		      name: 'Dec',
		y: 40,
		drilldown: 'Dec'
		     
		 }]
		  }
    
    $scope.capusOnedata = {
   	  	 name:"Campus1",
	  	 data: [{
	         name: 'Jan',
	         y: 24,
	         drilldown: 'Jan'
	                
	             }, {
	                  name: 'Feb',
	         y: 56,
	         drilldown: 'Feb'
	                 
	             }, {
	                 name: 'March',
	                 y: 45,
	                 drilldown: 'March'
	                         
	          },
	          {
	              name: 'April',
	     y: 46,
	     drilldown: 'April'
	             
	         },
	         {
	             name: 'May',
	    y: 36,
	    drilldown: 'May'
	            
	        },
	        {
	            name: 'June',
	   y: 32,
	   drilldown: 'June'
	           
	       },
	       {
	           name: 'july',
	  y: 47,
	  drilldown: 'July'
	          
	      },
	      {
	          name: 'Aug',
	 y: 50,
	 drilldown: 'Aug'
	         
	     },
	     {
	         name: 'Sep',
	y: 45,
	drilldown: 'Sep'
	        
	    },
	    {
	        name: 'Oct',
	y: 40,
	drilldown: 'Oct'
	       
	   },
	   {
	       name: 'Nov',
	y: 46,
	drilldown: 'Nov'
	      
	  },
	  {
	      name: 'Dec',
	y: 40,
	drilldown: 'Dec'
	     
	 }]
	  }
    
    $scope.capusThreeData = {
   	  	 name:"Campus3",
	  	 data: [{
	         name: 'Jan',
	         y: 50,
	         drilldown: 'Jan'
	                
	             }, {
	                  name: 'Feb',
	         y: 47,
	         drilldown: 'Feb'
	                 
	             }, {
	                 name: 'March',
	                 y: 45,
	                 drilldown: 'March'
	                         
	          },
	          {
	              name: 'April',
	     y: 37,
	     drilldown: 'April'
	             
	         },
	         {
	             name: 'May',
	    y: 56,
	    drilldown: 'May'
	            
	        },
	        {
	            name: 'June',
	   y: 60,
	   drilldown: 'June'
	           
	       },
	       {
	           name: 'july',
	  y: 65,
	  drilldown: 'July'
	          
	      },
	      {
	          name: 'Aug',
	 y: 52,
	 drilldown: 'Aug'
	         
	     },
	     {
	         name: 'Sep',
	y: 44,
	drilldown: 'Sep'
	        
	    },
	    {
	        name: 'Oct',
	y: 40,
	drilldown: 'Oct'
	       
	   },
	   {
	       name: 'Nov',
	y: 46,
	drilldown: 'Nov'
	      
	  },
	  {
	      name: 'Dec',
	y: 56,
	drilldown: 'Dec'
	     
	 }]
	  }
    	
    
    $scope.StudentAvgMarks3 = [$scope.capusOnedata,$scope.campusTwoData,$scope.capusThreeData]
   	
    $scope.StudentAvgMarks2 = [$scope.capusOnedata,$scope.campusTwoData]
    
    $scope.StudentAvgMarks1 = [$scope.capusOnedata]
    
    $scope.campusDrillData = [
		{
			name : 'campus1',
			id : 'campus1',
			data : [ 45, 56,
				78]
		},
		{
			name : 'campus2',
			id : 'campus2',
			data : [ { name:'Maths', y:67, color:'#00008B' }, { name:'Physics', y:85, color:'#008B8B'},
				{ name:'Chemistry', y:70, color:'#B8860B'}]
		},
		{
			name : 'campus3',
			id : 'campus3',
			data : [ { name:'Maths', y:80, color:'#8FBC8F' }, { name:'Physics', y:70, color:'#BDB76B'},
				{ name:'Chemistry', y:60, color:'#556B2F'}]
		} ];
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
    	Highcharts.setOptions({
    	    lang: {
    	        drillUpText: '◁ Back to {series.name}'
    	    }
    	});
        const chart = Highcharts.chart('container', {
            title: {
              text: 'Student Marks Data'
            },
            chart: {
                type: 'line'
                //width: 700,
               // height: 500
            },

            xAxis: {
              categories: true,
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
            
            
            series: $scope.chartArry,
            drilldown: {
                series: [{
                    id: 'Jan',
                    name: 'Campus1',
                    data: [
                        ['Maths', 20],
                        ['Physics', 30],
                        ['Chemistry', 50],
                    ]
                }, {
                    id: 'Feb',
                    name: 'Campus1',
                    data: [
                        ['Maths', 22],
                        ['Physics', 34],
                        ['Chemistry', 40],
                    ]
                },{
                    id: 'March',
                    name: 'Campus1',
                    data: [
                        ['Maths', 34],
                        ['Physics', 45],
                        ['Chemistry', 40],
                    ]
                },{
                    id: 'April',
                    name: 'Campus1',
                    data: [
                        ['Maths', 23],
                        ['Physics', 34],
                        ['Chemistry', 54],
                    ]
                },
                {
                    id: 'May',
                    name: 'Campus1',
                    data: [
                        ['Maths', 33],
                        ['Physics', 24],
                        ['Chemistry', 42],
                    ]
                },
                {
                    id: 'June',
                    name: 'Campus1',
                    data: [
                        ['Maths', 35],
                        ['Physics', 56],
                        ['Chemistry', 45],
                    ]
                },
                {
                    id: 'July',
                    name: 'Campus1',
                    data: [
                        ['Maths', 20],
                        ['Physics', 30],
                        ['Chemistry', 50],
                    ]
                },
                {
                    id: 'Aug',
                    name: 'Campus1',
                    data: [
                        ['Maths', 46],
                        ['Physics', 64],
                        ['Chemistry', 55],
                    ]
                },
                {
                    id: 'Sep',
                    name: 'Campus1',
                    data: [
                        ['Maths', 44],
                        ['Physics', 55],
                        ['Chemistry', 66],
                    ]
                },
                {
                    id: 'Oct',
                    name: 'Campus1',
                    data: [
                        ['Maths', 50],
                        ['Physics', 80],
                        ['Chemistry', 60],
                    ]
                },
                {
                    id: 'Nov',
                    name: 'Campus1',
                    data: [
                        ['Maths', 67],
                        ['Physics', 70],
                        ['Chemistry', 45],
                    ]
                },
                {
                    id: 'Dec',
                    name: 'Campus1',
                    data: [
                        ['Maths', 50],
                        ['Physics', 62],
                        ['Chemistry', 55],
                    ]
                }]
            
            }
          });
    }
    
  //to get all the date parts
    var getDateParts = function(date) {
        month = (new Date(date)).getMonth(),
            day = (new Date(date)).getDate(),
            year = (new Date(date)).getFullYear(),
            fullDate = date,
            first = (new Date(date)).getDate() - (new Date(date)).getDay(),
            last = first + 6,
            dayFromDate = day,
            dayToDate = day,
            weekFromDate = new Date((new Date(date)).setDate(first)).getTime(),
            weekToDate = new Date((new Date(date)).setDate(last)).getTime();
            monthFromDate = new Date((new Date(date)).getFullYear(), (new Date(date)).getMonth(), 1).getTime();
            monthToDate = new Date((new Date(date)).getFullYear(), (new Date(date)).getMonth() + 1, 0).getTime();
            yearFromDate = new Date((new Date(date)).getFullYear(), 0, 1).getTime();
            yearToDate = new Date((new Date(date)).getFullYear(), 11, 31).getTime();
            return {
              month: month,
              day: day,
              year: year,
              fullDate: fullDate,
              first: first,
              last: last,
              dayFromDate: dayFromDate,
              dayToDate: dayToDate,
              weekFromDate: weekFromDate,
              weekToDate: weekToDate,
              monthFromDate: monthFromDate,
              monthToDate: monthToDate,
              yearFromDate: yearFromDate,
              yearToDate: yearToDate
         }
     }
    $scope.dateObj = getDateParts(new Date());
 
    //to set active class on current tab
    $scope.setActiveType = function(type, dateObj) {
        $scope.displayValue = $scope.getValue(type, dateObj);
        $scope.chartArry = $scope.StudentAvgMarks1;
    };
     
    //to get the value based on the selected type(active tab)
    $scope.getValue = function(type, dateObj) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        $scope.active = type;
        if (type == 'DAY') {
            return $filter('date')(dateObj.fullDate, 'fullDate');
        } else if (type == 'MONTH') {
            return monthNames[dateObj.month] + ", " + dateObj.year;
        } else if (type == 'WEEK') {
            return $filter('date')(dateObj.weekFromDate, 'longDate') + " - " + $filter('date')(dateObj.weekToDate, 'longDate');
        } else if (type == 'YEAR') {
            return dateObj.year;
        }
    }
 
    //function to view next and previous dates.
    $scope.changeValue = function(type, dateObj, flag) {
        var date = new Date(dateObj.year, dateObj.month, dateObj.day)
        switch (type) {
            case 'DAY':
                flag == "prev" ? angular.extend(dateObj, getDateParts(date.setDate(date.getDate() - 1))) : angular.extend(dateObj, getDateParts(date.setDate(date.getDate() + 1)));
                break;
            case 'MONTH':
                flag == "prev" ? angular.extend(dateObj, getDateParts(date.setMonth(date.getMonth() - 1))) : angular.extend(dateObj, getDateParts(date.setMonth(date.getMonth() + 1)));
                break;
            case 'WEEK':
                flag == "prev" ? angular.extend(dateObj, getDateParts(date.setDate(date.getDate() - 7))) : angular.extend(dateObj, getDateParts(date.setDate(date.getDate() + 7)));
                break;
            case 'YEAR':
                flag == "prev" ? angular.extend(dateObj, getDateParts(date.setFullYear(date.getFullYear() - 1))) : angular.extend(dateObj, getDateParts(date.setFullYear(date.getFullYear() + 1)));
                break;
        }
        $scope.displayValue = $scope.getValue(type, dateObj);
    }
 
    $scope.init = function() {
        $scope.setActiveType('MONTH', $scope.dateObj);
    }
    
});

app.controller('rolesController', function($scope) {
    $scope.headingTitle = "Roles List";
});
