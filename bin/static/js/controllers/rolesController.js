app.controller('rolesController', function($scope, $filter,$rootScope) {
    $scope.headingTitle = "Roles List";
    $scope.campusNames = ["Campus1","Campus2","Campus3","Campus4"];
    $scope.subjects = ["Maths","Physics","Chemistry"];
    $scope.avgOfCampus1 = 70;
    $scope.avgOfCampus2 = 80;
    $scope.avgOfCampus3 = 90;
    $scope.chartArry = [];
    $scope.drillData = [];
    $scope.mathsDrillData = [{
    	    name: 'campus1',
    	    id: 'Maths',
    	    data: [
    	        [
    	            'campus1',
    	            80
    	        ],
    	        [
    	            'campus2',
    	            70
    	        ],
    	        [
    	            'campus3',
    	            60
    	        ]
    	    ]
    	}
    	
     ];
    
    $scope.physicsDrillData = [{
	    name: 'campus1',
	    id: 'Physics',
	    data: [
	        [
	            'campus1',
	            80
	        ],
	        [
	            'campus2',
	            70
	        ],
	        [
	            'campus3',
	            60
	        ]
	    ]
	}
	
	];
    
    $scope.chemistryDrillData = [{
	    name: 'campus1',
	    id: 'Chemistry',
	    data: [
	        [
	            'campus1',
	            80
	        ],
	        [
	            'campus2',
	            70
	        ],
	        [
	            'campus3',
	            60
	        ]
	    ]
	}
	
	    ];
    	
    
    $scope.campusDrillData = [{
    	    name: 'campus1',
    	    id: 'campus1',
    	    data: [
    	        [
    	            'Maths',
    	            80
    	        ],
    	        [
    	            'Physics',
    	            70
    	        ],
    	        [
    	            'Chemistry',
    	            60
    	        ]
    	    ]
    	},
    	{
    	    name: 'campus2',
    	    id: 'campus2',
    	    data: [
    	        [
    	            'Maths',
    	            95
    	        ],
    	        [
    	            'Physics',
    	            89
    	        ],
    	        [
    	            'Chemistry',
    	            50
    	        ]
    	    ]
    	},
    	{
    	    name: 'campus3',
    	    id: 'campus3',
    	    data: [
    	        [
    	            'Maths',
    	            98
    	        ],
    	        [
    	            'Physics',
    	            77
    	        ],
    	        [
    	            'Chemistry',
    	            66
    	        ]
    	    ]
    	}];
    $scope.disableStdChart = false;
    
    $scope.avgOfMaths = [{
      	 name: 'Maths',
      	colorByPoint: true,
          data: [{
              name: 'Maths',
              y: 92,
              drilldown: 'Maths'
          }
         
          ]
      }];
    
    $scope.avgOfPhysics = [{
     	 name: 'Physics',
     	colorByPoint: true,
         data: [{
             name: 'Physics',
             y: 78,
             drilldown: 'Physics'
         }
        
         ]
     }];
    
    $scope.avgOfChemistry = [{
    	 name: 'Chemistry',
    	colorByPoint: true,
        data: [{
            name: 'Chemistry',
            y: 86,
            drilldown: 'Chemistry'
        }
       
        ]
    }];
    
    $scope.campusOneData1 = [{
    	 name: 'campus1',
    	colorByPoint: true,
        data: [{
            name: 'campus1',
            y: $scope.avgOfCampus1,
            drilldown: 'campus1'
        }
       
        ]
    }];
    
    $scope.campusOneData2 = [{
    	 name: 'campus2',
    	colorByPoint: true,
        data: [{
            name: 'campus1',
            y: $scope.avgOfCampus1,
            drilldown: 'campus1'
        },
        {
            name: 'campus2',
            y: $scope.avgOfCampus2,
            drilldown: 'campus2'
        }
        ]
    }];
    
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
            y: $scope.avgOfCampus2,
            drilldown: 'campus2'
        },
        {
            name: 'campus3',
            y: $scope.avgOfCampus3,
            drilldown: 'campus3'
        }
        ]
    }];
    
    $scope.getSubjectDetails = function(selectedSubject){
    	$scope.disableStdChart = true;
    	if(selectedSubject == "Maths"){
    		$scope.drillId = 'Maths';
    		$scope.chartArry = $scope.avgOfMaths;
    		$scope.drillData = $scope.mathsDrillData;
    	}
    	if(selectedSubject == "Physics"){
    		$scope.drillId = 'Physics';
    		$scope.chartArry = $scope.avgOfPhysics;
    		$scope.drillData = $scope.physicsDrillData;
    	}
    	if(selectedSubject == "Chemistry"){
    		$scope.drillId = 'Chemistry';
    		$scope.chartArry = $scope.avgOfChemistry;
    		$scope.drillData = $scope.chemistryDrillData;
    	}
    	$scope.chartDaigram();
    	
    }
    
    $scope.getStudentDetails = function(selectedCampus){
    	$scope.campusesArray = selectedCampus;
    	if(selectedCampus){
    		$scope.disableStdChart = true;
    	if(selectedCampus.length == 1){
    		$scope.chartArry = $scope.campusOneData1;
    		$scope.drillData = $scope.campusDrillData;
    	}if(selectedCampus.length == 2){
    		$scope.chartArry = $scope.campusOneData2;
    	}if(selectedCampus.length == 3){
    		$scope.chartArry = $scope.campusOneData3;
    	}
    	}
    	$scope.chartDaigram();
    }
    
    $scope.chartDaigram = function(){
    	// Create the chart
        Highcharts.chart('container', {
            chart: {
                type: 'column'
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
                    text: 'Total percent market share'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
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
        $scope.getStudentDetails($scope.campusesArray);
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