/*app
 .service( 'MenuService', [ '$rootScope','$scope', function( $rootScope,$scope ) {
   return {
      menu: [ 'Item 1' ],
      add: function() {
        this.menu.push( item );
      }
   };
 }])*/
 
 app.service('MenuService',['$http','$rootScope',MenuService]);

function MenuService($http,$rootScope) {
	return {
		getYearData : getYearData
	};
	function getYearData(){
		return "sudha";
	}
}