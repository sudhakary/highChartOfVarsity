 app.service('MenuService',['$http','$rootScope',MenuService]);

function MenuService($http,$rootScope) {
	return {
		getYearData : getYearData,
		getStudentsData: getStudentsData
	};
	function getYearData(){
		return "sudha";
	}
	
	function getStudentsData(campus){
		return $http.get("student/campus/"+campus).success(function(res){
			return res;
		})
	}
	/*function getEmployeeDetail(empEmailId){
		//return $http.post('getEmployeeDetail').success(getEmployeeDetailSuccess);
		return $http.get('userDetails/logedInUser').success(getEmployeeDetailSuccess);
	}*/
}