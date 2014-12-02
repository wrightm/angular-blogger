'use strict'

angular.module('blogger.directives',[]);

angular.module('blogger.directives').directive('appVersion',['version',function(version){
	return {
		restrict: 'AE',
		link: function(scope,elem,attrs){
			elem.html(version);
		}
	}	
}]);