var myApp = angular.module("myApp",[]);
myApp.controller('ItemController',['$scope', function($scope) {
	$scope.testItem = {
		name: 'This is the name',
		image: '../img/dice.jpg',
		price: '9.99',
	};
	$scope.saleItems = [
		{
		name: "Oak Colored Cabinets",
		type: "furniture",
		thumb: 'img/cabinet1-thumb.jpg',
		image: 'img/cabinet1.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 60" x 30" 18" </li><li> Solid Build, 3 shelves  </li></li><li><span> Price per cabinet*</span></li><li></li>',
		soldOut: false,
	},
	{
		name: "Oak Colored DVD Cabinets",
		type: "furniture",
		thumb: 'img/dvd-cabinet-thumb.jpg',
		image: 'img/dvd-cabinet.jpg',
		price: 9.99,
		description: '<li><span>Dimensions:</span> 45" x 12" 6" </li><li> 4 shelves  </li><li><span> Price per cabinet*</span></li>',
		soldOut: false,
	},
	{
		name: "Black DVD 360 Swivel",
		type: "furniture",
		thumb: 'img/dvd-case-thumb.jpg',
		image: 'img/dvd-case.jpg',
		price: 29.99,
		description: '<li><span>Dimensions:</span> 36" x 12" 12"</li><li> </li><li> </li>',
		soldOut: false,
	},
	{
		name: "Black Side Tables",
		type: "furniture",
		thumb: 'img/side-table-thumb.jpg',
		image: 'img/side-table.jpg',
		price: 29.99,
		description: '<li><span>Dimensions:</span> 24" x 12"</li><li> Black with Limestone top </li><li> Magazine rack on bottom</li>',
		soldOut: false,
	},
	{
		name: "Kitchen Table + 4 chairs",
		type: "furniture",
		thumb: 'img/dining-table-oak-thumb.jpg',
		image: 'img/dining-table-oak.jpg',
		price: 99.99,
		description: '<li><span>Dimensions:</span> 42" x 42" x 30" </li>',
		soldOut: false,
	},
	{
		name: "Plastic 6 Drawer Cabinet",
		type: "furniture",
		thumb: 'img/plastic-cabinet-thumb.jpg',
		image: 'img/plastic-cabinet.jpg',
		price: 9.99,
		description: '<li><span>Dimensions:</span> 32" x 20" x 15" </li>',
		soldOut: false,
	},
	{
		name: "Two Nightstands and Armoire",
		type: "furniture",
		thumb: 'img/nightstands-armoire-thumb.jpg',
		image: 'img/nightstands-armoire.jpg',
		price: 149.99,
		description: '<li><span>Nightstand Dimensions:</span> 30" x 16" x 26"</li><li><span>Armoire Dimensions:</span> 40" x 62" x 26"</li><li>Two doors open to shelf and two drawers, two bottom drawers.</li>',
		soldOut: false,
	},	
	{
		name: "Black TV Stand",
		type: "furniture",
		thumb: 'img/tv-stand-thumb.jpg',
		image: 'img/tv-stand.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 42" x 26" x 20" </li><li>Two side cabinets, two shelves in center</li>',
		soldOut: false,
	},	
	{
		name: "Medium Colored Dresser",
		type: "furniture",
		thumb: 'img/dresser-thumb.jpg',
		image: 'img/dresser.jpg',
		price: 39.99,
		description: '<li><span>Dimensions:</span> 46" x 46" x 20" </li>',
		soldOut: false,
	},
	{
		name: "Australian Blackwood Dining Table",
		type: "antiques",
		thumb: 'img/dining-table-blackwood-thumb.jpg',
		image: 'img/dining-table-blackwood.jpg',
		price: 999.99,
		description: '<li><span>Dimensions:</span> 68" x 44" and Three 12" leaves</li><li>Crank handle to put side leafs in or out.</li><li>6 Ornate chairs with cane seats included.</li>',
		soldOut: false,
	},
	{
		name: "Dark Oak Buffet",
		type: "antiques",
		thumb: 'img/buffet-thumb.jpg',
		image: 'img/buffet.jpg',
		price: 349.99,
		description: '<li><span>Dimensions:</span> 65" x 42"</li><li>Two upper drawers, two center drawers, two side cabinets.</li>',
		soldOut: false,
	},
	{
		name: "Dark Oak Table",
		type: "antiques",
		thumb: 'img/oak-table-thumb.jpg',
		image: 'img/oak-table.jpg',
		price: 149.99,
		description: '<li><span>Dimensions:</span> 24" x 28" x 18" with two 12" sides</li><li>Two folding sides, one drawer in front</li>',
		soldOut: false,
	},
	{
		name: "Ornate Tall Mirror",
		type: "antiques",
		thumb: 'img/mirror-thumb.jpg',
		image: 'img/mirror.jpg',
		price: 299.99,
		description: '<li><span>Dimensions:</span> 24" x 28" x 18" with two 12" sides</li>',
		soldOut: false,
	},
	{
		name: "Ornate Preacher Bench and Table",
		type: "antiques",
		thumb: 'img/preacher-thumb.jpg',
		image: 'img/preacher.jpg',
		price: 399.99,
		description: '<li><span>Dimensions:</span> 48" x 54" x 24"</li><li>Cream background with flowers, matches fainting couch.</li>',
		soldOut: false,
	},
	{
		name: "Fainting Couch",
		type: "antiques",
		thumb: 'img/fainting-couch-thumb.jpg',
		image: 'img/fainting-couch.jpg',
		price: 499.99,
		description: '<span>Dimensions</span> 52" x 86" x 26"</li><li>Cream background with flowers, matches preacher bench.</li>',
		soldOut: false,
	},
	{
		name: "Victorian Style Wingback Chair",
		type: "antiques",
		thumb: 'img/wingback-chairs-thumb.jpg',
		image: 'img/wingback-chairs.jpg',
		price: 199.99,
		description: '<span>Dimensions</span> 52" x 86" x 26"</li><li>Salmon color with stripes and flower pattern.</li><li>Ball and clawfeet</li>',
		soldOut: false,
	},
	{
		name: "Table Set",
		type: "antiques",
		thumb: 'img/table-set-thumb.jpg',
		image: 'img/table-set.jpg',
		price: 199.99,
		description: '<li>Two end tables, One sofa table</li><li>One coffee table</li><li>Cherry with glass tops</li><li>Ball and clawfeet</li>',
		soldOut: false,
	},
	{
		name: "BONUS RUSH Slot Machine",
		type: "appliances",
		thumb: 'img/slots-thumb.jpg',
		image: 'img/slots.jpg',
		price: 99.99,
		description: '<li><span>Dimensions:</span> 12" x 18" x 36" </li><li>Comes with 1000 tokens, machine key. Fully functional.</li>',
		soldOut: false,
	}
	];
}]);
myApp.filter('htmlConvert', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
myApp.directive("itemList", function() {
	return {
		restrict: "E",
		scope: {
			listing: '=',
		},
		templateUrl: "js/directives/itemList.html"
	};
});
$(function() {
	$("#furniture").change(function() {
		$(".furniture").toggleClass('hidden').parent().toggleClass('col-md-4');
	});
	$("#antiques").change(function() {
		$(".antiques").toggleClass('hidden').parent().toggleClass('col-md-4');
	});
	$("#appliances").change(function() {
		$(".appliances").toggleClass('hidden').parent().toggleClass('col-md-4');
	});
	$("#other").change(function() {
		$(".other").toggleClass('hidden').parent().toggleClass('col-md-4');
	});	
});