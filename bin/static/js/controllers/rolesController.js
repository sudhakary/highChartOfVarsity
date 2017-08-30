app.controller('rolesController', function($scope, $filter,$rootScope) {
    $scope.headingTitle = "Roles List";
    $scope.campusNames = ["Campus1","Campus2","Campus3"];
    $scope.subjects = ["Maths","Physics","Chemistry"];
    $scope.disableStdChart = false;
    $scope.enableDateChart = false;
    $scope.tempDateArray = [];
    $scope.avgOfCampus1 = 70;
    $scope.avgOfCampus2 = 80;
    $scope.avgOfCampus3 = 90;
    $scope.campusesArray = [];
    $scope.chartArry = [];
    $scope.drillData = [];
					    $scope.mathsDrillData = [ {
						name : 'campus1',
						id : 'Maths',
						data : [ { name:'campus1', y:80, color:'#4682B4' }, { name:'campus2', y:85, color:'#CD5C5C'},
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
    	if($scope.enableDateChart){
    		$scope.campusesArray = [];
    	}
    	if(selectedCampus){
    		$scope.disableStdChart = true;
    	if(selectedCampus.length == 1){
    		$scope.chartArry = $scope.campusOneData1;
    		$scope.drillData = $scope.campusDrillData;
    	}if(selectedCampus.length == 2){
    		$scope.chartArry = $scope.campusOneData2;
    		$scope.drillData = $scope.campusDrillData;
    	}if(selectedCampus.length == 3){
    		if($scope.enableDateChart){
    			$scope.chartArry = $scope.tempDateArray;
        		$scope.drillData = $scope.campusDrillData;
    		}else{
    			$scope.chartArry = $scope.campusOneData3;
        		$scope.drillData = $scope.campusDrillData;
    		}
    		
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
        if($scope.campusesArray.length > 0){
        	$scope.getStudentDetails($scope.campusesArray);
        	$scope.enableDateChart = false;
        }else{
        	$scope.tempCampusesArray = ["campu1","campu2","campu3"];
        	//$scope.campusesArray = $scope.tempCampusesArray;
        	$scope.enableDateChart = true;
        	$scope.tempDateArray = [];
        	if(type == 'DAY'){
        		$scope.tempDateArray = $scope.selectedDate;
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        	}
        	if(type == 'MONTH'){
        		$scope.tempDateArray = $scope.selectedMonth;
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        	}
        	if(type == 'WEEK'){
        		$scope.tempDateArray = $scope.selectedWeek;
        		$scope.getStudentDetails($scope.tempCampusesArray);
        		$scope.tempCampusesArray = [];
        	}if(type == 'YEAR'){
        		$scope.tempDateArray = $scope.selectedYear;
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
    
   
       
});