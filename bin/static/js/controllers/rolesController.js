app.controller('rolesController', ['$rootScope', '$scope','$filter','MenuService', function($rootScope,$scope,$filter,MenuService) {
    $scope.headingTitle = "Roles List";
    $scope.campusNames = ["Campus1","Campus2","Campus3"];
    $scope.subjects = ["Maths","Physics","Chemistry"];
    $scope.disableStdChart = false;
    $scope.enableDateChart = false;
    $scope.enableYearLineData = false;
    $scope.tempDateArray = [];
    $scope.avgOfCampus1 = 70;
    $scope.displayValue = '';
    $scope.avgOfCampus2 = 80;
    $scope.chartType = 'column';
    $scope.avgOfCampus3 = 90;
    $scope.campusesArray = [];
    $scope.chartArry = [];
    $scope.drillData = [];
					    $scope.mathsDrillData = [ {
						name : 'campus1',
						id : 'Maths',
						data : [ { name:'campus1', y:80, color:'#4682B4' }, { name:'campus2', y:90, color:'#CD5C5C'},
							{ name:'campus3', y:70, color:'#20B2AA'}]
					}

					];
    

					    $scope.physicsDrillData = [ {
						name : 'campus1',
						id : 'Physics',
						data : [ { name:'campus1', y:72, color:'#00008B' }, { name:'campus2', y:85, color:'#CD5C5C'},
							{ name:'campus3', y:70, color:'#20B2AA'}]
					}

					];
    

					    $scope.chemistryDrillData = [ {
						name : 'campus1',
						id : 'Chemistry',
						data : [ { name:'campus1', y:85, color:'#006400' }, { name:'campus2', y:78, color:'#BDB76B'},
							{ name:'campus3', y:90, color:'#556B2F'}]
					}

					];
    	
    

					    $scope.campusDrillData = [
							{
								name : 'campus1',
								id : 'campus1',
								data : [ { name:'Maths', y:80, color:'#4682B4' }, { name:'Physics', y:85, color:'#CD5C5C'},
									{ name:'Chemistry', y:70, color:'#20B2AA'}]
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
    

					    $scope.avgOfMaths = [ {
						name : 'Maths',
						colorByPoint : true,
						data : [ {
							name : 'Maths',
							color: '#D2691E',
							y : 92,
							drilldown : 'Maths'
						}

						]
					} ];
    

					    $scope.avgOfPhysics = [ {
						name : 'Physics',
						colorByPoint : true,
						data : [ {
							name : 'Physics',
							color: '#008B8B',
							y : 78,
							drilldown : 'Physics'
						}

						]
					} ];
    

					    $scope.avgOfChemistry = [ {
						name : 'Chemistry',
						colorByPoint : true,
						data : [ {
							name : 'Chemistry',
							color: '#B8860B',
							y : 86,
							drilldown : 'Chemistry'
						}

						]
					} ];
    

					    $scope.campusOneData1 = [ {
						name : 'campus1',
						colorByPoint : true,
						data : [ {
							name : 'campus1',
							y : $scope.avgOfCampus1,
							drilldown : 'campus1'
						}

						]
					} ];
    

					    $scope.campusOneData2 = [ {
						name : 'campus2',
						colorByPoint : true,
						data : [ {
							name : 'campus1',
							y : $scope.avgOfCampus1,
							drilldown : 'campus1'
						}, {
							name : 'campus2',
							color: '#008B8B',
							y : $scope.avgOfCampus2,
							drilldown : 'campus2'
						} ]
					} ];
    
    $scope.campusOneData3 = [{
    	 name: 'campus3',
    	colorByPoint: true,
        data: [{
            name: 'campus1',
            y: $scope.avgOfCampus1,
            drilldown: 'campus1'
        },
        {
            name: 'campus2',
            color: '#008B8B',
            y: $scope.avgOfCampus2,
            drilldown: 'campus2'
        },
        {
            name: 'campus3',
            color: '#FF7F50',
            y: $scope.avgOfCampus3,
            drilldown: 'campus3'
        }
        ]
    }];
    
    $scope.selectedDate = [{
   	 name: 'Date',
   	colorByPoint: true,
       data: [{
           name: 'campus1',
           color: '#BDB76B',
           y: 67,
           drilldown: 'campus1'
       },
       {
           name: 'campus2',
           color: '#008B8B',
           y: 86,
           drilldown: 'campus2'
       },
       {
           name: 'campus3',
           color: '#FF7F50',
           y: 77,
           drilldown: 'campus3'
       }
       ]
   }];
    
    $scope.selectedWeek = [{
      	 name: 'Week',
      	colorByPoint: true,
          data: [{
              name: 'campus1',
              color: '#FF7F50',
              y: 60,
              drilldown: 'campus1'
          },
          {
              name: 'campus2',
              color: '#008B8B',
              y: 70,
              drilldown: 'campus2'
          },
          {
              name: 'campus3',
              color: '#8FBC8F',
              y: 50,
              drilldown: 'campus3'
          }
          ]
      }];
    
    $scope.selectedMonth = [{
      	 name: 'Month',
      	colorByPoint: true,
          data: [{
              name: 'campus1',
              color: '#BDB76B',
              y: 77,
              drilldown: 'campus1'
          },
          {
              name: 'campus2',
              color: '#008B8B',
              y: 67,
              drilldown: 'campus2'
          },
          {
              name: 'campus3',
              color: '#FF7F50',
              y: 80,
              drilldown: 'campus3'
          }
          ]
      }];
    
    $scope.selectedYear = [{
      	 name: 'Year',
      	colorByPoint: true,
          data: [{
              name: 'campus1',
              color: '#BDB76B',
              y: 55,
              drilldown: 'campus1'
          },
          {
              name: 'campus2',
              color: '#008B8B',
              y: 70,
              drilldown: 'campus2'
          },
          {
              name: 'campus3',
              color: '#FF7F50',
              y: 66,
              drilldown: 'campus3'
          }
          ]
      }];
    
    
    
    $scope.getSubjectDetails = function(selectedSubject){
    	$scope.chartType = 'column';
    	$scope.disableStdChart = true;
    	if(selectedSubject == "Maths"){
    		$scope.drillId = 'Maths';
    		$scope.chartArry = $scope.avgOfMaths;
    		$scope.drillData = $scope.mathsDrillData;
    		$scope.avgMarksOfCampuses = "Average of Maths";
    	}
    	if(selectedSubject == "Physics"){
    		$scope.drillId = 'Physics';
    		$scope.chartArry = $scope.avgOfPhysics;
    		$scope.drillData = $scope.physicsDrillData;
    		$scope.avgMarksOfCampuses = "Average of Physics";
    	}
    	if(selectedSubject == "Chemistry"){
    		$scope.drillId = 'Chemistry';
    		$scope.chartArry = $scope.avgOfChemistry;
    		$scope.drillData = $scope.chemistryDrillData;
    		$scope.avgMarksOfCampuses = "Average of Chemistry";
    	}
    	$scope.chartDaigram();
    	
    }
    
    $scope.getStudentDetails = function(selectedCampus){
    	
    	MenuService.getStudentsData(selectedCampus).success(function(res){
    		console.log("Campus data is "+JSON.stringify(res));
    	})
    	
    	
    	$scope.campusesArray = selectedCampus;
    	if($scope.enableDateChart){
    		$scope.campusesArray = [];
    	}
    	if(selectedCampus){
    		$scope.disableStdChart = true;
    	if(selectedCampus.length == 1){
    		if($scope.enableYearLineData){
    			$scope.chartArry = $scope.StudentAvgMarks1;
        		$scope.drillData = $scope.YearDrillData;
    		}else{
    			$scope.chartArry = $scope.campusOneData1;
        		$scope.drillData = $scope.campusDrillData;
        		$scope.avgMarksOfCampuses = "Average Marks of Campuses level.";
    		}
    		
    	}if(selectedCampus.length == 2){
    		if($scope.enableYearLineData){
    			$scope.chartArry = $scope.StudentAvgMarks2;
        		$scope.drillData = $scope.YearDrillData;
    		}else{
    			$scope.chartArry = $scope.campusOneData2;
        		$scope.drillData = $scope.campusDrillData;
    		}
    		
    	}if(selectedCampus.length == 3){
    		if($scope.enableYearLineData){
    			$scope.chartArry = $scope.StudentAvgMarks3;
        		$scope.drillData = $scope.YearDrillData;
    		}else{
    			if($scope.enableDateChart){
        			$scope.chartArry = $scope.tempDateArray;
            		$scope.drillData = $scope.campusDrillData;
        		}else{
        			$scope.chartArry = $scope.campusOneData3;
            		$scope.drillData = $scope.campusDrillData;
        		}
    		}
    		
    		
    	}
    	}
    	$scope.chartDaigram();
    }
    
    $scope.chartDaigram = function(){
    	// Create the chart
        Highcharts.chart('container', {
        	plotOptions: {
                series: {
                	events:{
                        click: function (event) {
                        	if(event.point.name == 'campus1' || event.point.name == 'campus2' || event.point.name == 'campus3'){
                        		$('#container').highcharts().yAxis[0].setTitle({ text: "Average Marks of Subject level" });
                        	}
                        	if(event.point.name == 'Maths'){
                        		$('#container').highcharts().yAxis[0].setTitle({ text: "Average  of Maths in  Campuses level" });
                        	}
                        	if(event.point.name == 'Physics'){
                        		$('#container').highcharts().yAxis[0].setTitle({ text: "Average  of Physics in  Campuses level" });
                        	}
                        	if(event.point.name == 'Chemistry'){
                        		$('#container').highcharts().yAxis[0].setTitle({ text: "Average  of Chemistry in  Campuses level" });
                        	}
                             
                        }
                  },
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
        	
        	chart: {
                type: $scope.chartType
            },
            title: {
                text: 'Average Student marks in Campuses. '+$scope.displayValue
            },
            subtitle: {
                text: 'Click the columns to view versions.'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: $scope.avgMarksOfCampuses
                }

            },
            legend: {
                enabled: false
            },
            

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: $scope.chartArry,
            drilldown: {
                series: $scope.drillData
            }
        });
        
     // ended the chart
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
        if($scope.campusesArray.length > 0){
        	if(type == 'YEAR'){
        		$scope.chartType = 'line';
        		if($scope.campusesArray.length == 1){
        		$scope.tempDateArray = $scope.StudentAvgMarks1;
        		$scope.enableYearLineData = true;
        		$scope.getStudentDetails($scope.campusesArray);
        		}if($scope.campusesArray.length == 2){
        			$scope.tempDateArray = $scope.StudentAvgMarks2;
            		$scope.enableYearLineData = true;
            		$scope.getStudentDetails($scope.campusesArray);
        		}if($scope.campusesArray.length == 3){
	                $scope.tempDateArray = $scope.StudentAvgMarks3;
	                $scope.enableYearLineData = true;
	              $scope.getStudentDetails($scope.campusesArray);
        		}
        	}else{
        		$scope.enableDateChart = false;
        		$scope.enableYearLineData = false;
        		$scope.chartType = 'column';
        		$scope.getStudentDetails($scope.campusesArray);
        	}
        	
        }else{
        	$scope.tempCampusesArray = ["campu1","campu2","campu3"];
        	//$scope.campusesArray = $scope.tempCampusesArray;
        	$scope.enableDateChart = true;
        	$scope.tempDateArray = [];
        	if(type == 'DAY'){
        		$scope.enableYearLineData = false;
        		$scope.chartType = 'column';
        		$scope.tempDateArray = $scope.selectedDate;
        		$scope.avgMarksOfCampuses = "Day wise Campuses Averages";
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        	}
        	if(type == 'MONTH'){
        		$scope.enableYearLineData = false;
        		$scope.chartType = 'column';
        		$scope.tempDateArray = $scope.selectedMonth;
        		$scope.avgMarksOfCampuses = "Month wise Campuses Averages";
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        	}
        	if(type == 'WEEK'){
        		$scope.enableYearLineData = false;
        		$scope.chartType = 'column';
        		$scope.tempDateArray = $scope.selectedWeek;
        		$scope.avgMarksOfCampuses = "Week wise Campuses Averages";
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        	}if(type == 'YEAR'){
        		$scope.tempDateArray = $scope.StudentAvgMarks3;
        		$scope.chartType = 'line';
        		$scope.enableYearLineData = true;
        		$scope.campusDrillData =  $scope.YearDrillData;
        		$scope.avgMarksOfCampuses = "Year wise Campuses Averages";
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        		

        	}
        	/*$scope.chartArry = $scope.selectedDate;
    		$scope.drillData = $scope.campusDrillData;
    		$scope.chartDaigram();*/
        }
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
    $rootScope.campusTwoData = {
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
    
    $scope.YearDrillData = [{
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
            }
        
       ]
   	
   
   $scope.StudentAvgMarks3 = [$scope.capusOnedata,$rootScope.campusTwoData,$scope.capusThreeData]
   $scope.StudentAvgMarks2 = [$scope.capusOnedata,$rootScope.campusTwoData]
    $scope.StudentAvgMarks1 = [$scope.capusOnedata]
   
       
}]);