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
		$http.get("student/campus/"+campus).success(function(res){
			return res;
		})
	}
}