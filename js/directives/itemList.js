myApp.directive("itemList", function() {
	return {
		restrict: "E",
		scope: {
			listing: '=',
		},
		templateUrl: "js/directives/itemList.html"
	};
});