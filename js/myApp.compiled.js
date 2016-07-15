var myApp = angular.module("myApp",[]);

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

!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var c=[],d=function(b){return c=a.grep(c,function(a){return a!==b&&a.$instance.closest("body").length>0})},e=function(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c},f={keyup:"onKeyUp",resize:"onResize"},g=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[f[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},h=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(f,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,g)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<span class="'+e+"-close-icon "+d.namespace+'-close">',d.closeIcon,"</span>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(b.preventDefault(),d.close())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){var c=this;return(b.is("iframe")||a("iframe",b).length>0)&&c.$instance.addClass(c.namespace+"-iframe"),c.$instance.removeClass(c.namespace+"-loading"),c.$instance.find("."+c.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0],b[0])?"":b),c.$content=b.addClass(c.namespace+"-inner"),c},open:function(b){var d=this;if(d.$instance.hide().appendTo(d.root),!(b&&b.isDefaultPrevented()||d.beforeOpen(b)===!1)){b&&b.preventDefault();var e=d.getContent();if(e)return c.push(d),h(!0),d.$instance.fadeIn(d.openSpeed),d.beforeContent(b),a.when(e).always(function(a){d.setContent(a),d.afterContent(b)}).then(d.$instance.promise()).done(function(){d.afterOpen(b)})}return d.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,e=a.Deferred();return c.beforeClose(b)===!1?e.reject():(0===d(c).length&&h(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),e.resolve()})),e.promise()},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},iframe:{process:function(b){var c=new a.Deferred,d=a("<iframe/>").hide().attr("src",b).css(e(this,"iframe")).on("load",function(){c.resolve(d.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return c.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=a.parseJSON(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d);return b.on(h.openTrigger+"."+h.namespace,h.filter,function(g){var i=a.extend({$source:b,$currentTarget:a(this)},e.readElementConfig(b[0],h.namespace),e.readElementConfig(this,h.namespace),d),j=f||a(this).data("featherlight-persisted")||new e(c,i);"shared"===j.persist?f=j:j.persist!==!1&&a(this).data("featherlight-persisted",j),i.$currentTarget.blur(),j.open(g)}),b},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return d(),a.grep(c,function(a){return a instanceof b})},close:function(){var a=this.current();return a?a.close():void 0},_onReady:function(){var b=this;b.autoBind&&(a(b.autoBind).each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(c){c.isDefaultPrevented()||(c.preventDefault(),b.attach(a(c.currentTarget)),a(c.target).click())}))},_callbackChain:{onKeyUp:function(a,b){return 27===b.keyCode?(this.closeOnEsc&&this.$instance.find("."+this.namespace+"-close:first").click(),!1):a(b)},onResize:function(a,b){if(this.$content.naturalWidth){var c=this.$content.naturalWidth,d=this.$content.naturalHeight;this.$content.css("width","").css("height","");var e=Math.max(c/parseInt(this.$content.parent().css("width"),10),d/parseInt(this.$content.parent().css("height"),10));e>1&&this.$content.css("width",""+c/e+"px").css("height",""+d/e+"px")}return a(b)},afterContent:function(a,b){var c=a(b);return this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c)},a(document).ready(function(){b._onReady()})}(jQuery);

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
		price: 24.99,
		description: '<li><span>Dimensions:</span> 60" x 30" 18" </li><li> Solid Build, 3 shelves  </li></li><li><span> Price per cabinet*</span></li><li></li>',
		soldOut: false,
	},
	{
		name: "Oak Colored DVD Cabinets",
		type: "furniture",
		thumb: 'img/dvd-cabinet-thumb.jpg',
		image: 'img/dvd-cabinet.jpg',
		price: 4.99,
		description: '<li><span>Dimensions:</span> 45" x 12" 6" </li><li> 4 shelves  </li><li><span> Price per cabinet*</span></li>',
		soldOut: false,
	},
	{
		name: "Black DVD 360 Swivel",
		type: "furniture",
		thumb: 'img/dvd-case-thumb.jpg',
		image: 'img/dvd-case.jpg',
		price: 14.99,
		description: '<li><span>Dimensions:</span> 36" x 12" 12"</li><li> </li><li> </li>',
		soldOut: false,
	},
	{
		name: "Jewelry Closet",
		type: "furniture",
		thumb: 'img/mirror-box-thumb.jpg',
		image: 'img/mirror-box.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 18" x 60"</li><li>3 side mirrors and 3 doors</li><li>Full 360&deg; swivel</li>',
		soldOut: false,
	},
	{
		name: "Black Side Tables",
		type: "furniture",
		thumb: 'img/side-table-thumb.jpg',
		image: 'img/side-table.jpg',
		price: 14.99,
		description: '<li><span>Dimensions:</span> 24" x 12"</li><li> Black with Limestone top </li><li> Magazine rack on bottom</li>',
		soldOut: false,
	},
	{
		name: "Bar Height Round Table",
		type: "furniture",
		thumb: 'img/round-table-thumb.jpg',
		image: 'img/round-table.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 36" Height</li><li> Sides raise up for larger table. </li><li> Includes two chairs</li>',
		soldOut: false,
	},

	{
		name: "Kitchen Table + 4 chairs",
		type: "furniture",
		thumb: 'img/dining-table-oak-thumb.jpg',
		image: 'img/dining-table-oak.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 42" x 42" x 30" </li>',
		soldOut: true,
	},
	{
		name: "Plastic 6 Drawer Cabinet",
		type: "furniture",
		thumb: 'img/plastic-cabinet-thumb.jpg',
		image: 'img/plastic-cabinet.jpg',
		price: 4.99,
		description: '<li><span>Dimensions:</span> 32" x 20" x 15" </li>',
		soldOut: false,
	},
	{
		name: "Two Nightstands and Armoire",
		type: "furniture",
		thumb: 'img/nightstands-armoire-thumb.jpg',
		image: 'img/nightstands-armoire.jpg',
		price: 74.99,
		description: '<li><span>Nightstand Dimensions:</span> 30" x 16" x 26"</li><li><span>Armoire Dimensions:</span> 40" x 62" x 26"</li><li>Two doors open to shelf and two drawers, two bottom drawers</li>',
		soldOut: false,
	},
	{
		name: "Chocolate Brown Love Seat",
		type: "furniture",
		thumb: 'img/loveseat-thumb.jpg',
		image: 'img/loveseat.jpg',
		price: 49.99,
		description: '<li></li>',
		soldOut: false,
	},
	{
		name: "Black TV Stand",
		type: "furniture",
		thumb: 'img/tv-stand-thumb.jpg',
		image: 'img/tv-stand.jpg',
		price: 24.99,
		description: '<li><span>Dimensions:</span> 42" x 26" x 20" </li><li>Two side cabinets, two shelves in center</li>',
		soldOut: false,
	},
	{
		name: "Medium Colored Dresser",
		type: "furniture",
		thumb: 'img/dresser-thumb.jpg',
		image: 'img/dresser.jpg',
		price: 19.99,
		description: '<li><span>Dimensions:</span> 46" x 46" x 20" </li>',
		soldOut: false,
	},
	{
		name: "Dining Table",
		type: "furniture",
		thumb: 'img/legless-table-thumb.jpg',
		image: 'img/legless-table.jpg',
		price: 24.99,
		description: '<li>Legs included (not shown in photo)</li>',
		soldOut: false,
	},
	{
		name: "16 Slot Cubby Cabinet",
		type: "furniture",
		thumb: 'img/21-cubby-thumb.jpg',
		image: 'img/21-cubby.jpg',
		price: 9.99,
		description: '<li></li>',
		soldOut: false,
	},
	{
		name: "8 Slot Cubby Chest",
		type: "furniture",
		thumb: 'img/9-cubby-thumb.jpg',
		image: 'img/9-cubby.jpg',
		price: 9.99,
		description: '<li></li>',
		soldOut: false,
	},
	{
		name: "2 Slot Side Cubby",
		type: "furniture",
		thumb: 'img/side-cubby-thumb.jpg',
		image: 'img/side-cubby.jpg',
		price: 4.99,
		description: '<li></li>',
		soldOut: false,
	},
	{
		name: "Small White Desk",
		type: "furniture",
		thumb: 'img/white-desk-thumb.jpg',
		image: 'img/white-desk.jpg',
		price: 9.99,
		description: '<li>Pink and Blue stripe</li>',
		soldOut: false,
	},
	{
		name: "White Nightstands",
		type: "furniture",
		thumb: 'img/white-nightstands-thumb.jpg',
		image: 'img/white-nightstands.jpg',
		price: 9.99,
		description: '<li>Price per Nightstand</li>',
		soldOut: false,
	},
	{
		name: "Cherry Sleigh Day Bed",
		type: "furniture",
		thumb: 'img/daybed-thumb.jpg',
		image: 'img/daybed.jpg',
		price: 49.99,
		description: '<li>Twin sized bed and includes matress</li>',
		soldOut: false,
	},
	{
		name: "Two Shelf Bookcase",
		type: "furniture",
		thumb: 'img/blue-shelf-thumb.jpg',
		image: 'img/blue-shelf.jpg',
		price: 1.99,
		description: '<li><span>Dimensions:</span></li><li> 12" x 30" x 30"</li>',
		soldOut: false,
	},

	//	ANTIQUES	//


	{
		name: "Australian Blackwood Dining Table",
		type: "antiques",
		thumb: 'img/dining-table-blackwood-thumb.jpg',
		image: 'img/dining-table-blackwood.jpg',
		price: 499.99,
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
		soldOut: true,
	},
	{
		name: "Dark Oak Table",
		type: "antiques",
		thumb: 'img/oak-table-thumb.jpg',
		image: 'img/oak-table.jpg',
		price: 74.99,
		description: '<li><span>Dimensions:</span> 24" x 28" x 18" with two 12" sides</li><li>Two folding sides, one drawer in front</li>',
		soldOut: false,
	},
	{
		name: "Hall Tree",
		type: "antiques",
		thumb: 'img/coattree-thumb.jpg',
		image: 'img/coattree.jpg',
		price: 12.99,
		description: '<li></li>',
		soldOut: false,
	},
	{
		name: "Ornate Tall Mirror",
		type: "antiques",
		thumb: 'img/mirror-thumb.jpg',
		image: 'img/mirror.jpg',
		price: 149.99,
		description: '<li><span>Dimensions:</span> 24" x 28" x 18" with two 12" sides</li>',
		soldOut: false,
	},
	{
		name: "Ornate Preacher Bench and Table",
		type: "antiques",
		thumb: 'img/preacher-thumb.jpg',
		image: 'img/preacher.jpg',
		price: 199.99,
		description: '<li><span>Dimensions:</span> 48" x 54" x 24"</li><li>Cream background with flowers, matches fainting couch.</li>',
		soldOut: false,
	},
	{
		name: "Fainting Couch",
		type: "antiques",
		thumb: 'img/fainting-couch-thumb.jpg',
		image: 'img/fainting-couch.jpg',
		price: 249.99,
		description: '<span>Dimensions</span> 52" x 86" x 26"</li><li>Cream background with flowers, matches preacher bench.</li>',
		soldOut: false,
	},
	{
		name: "Victorian Style Wingback Chair",
		type: "antiques",
		thumb: 'img/wingback-chairs-thumb.jpg',
		image: 'img/wingback-chairs.jpg',
		price: 99.99,
		description: '<span>Dimensions</span> 52" x 86" x 26"</li><li>Salmon color with stripes and flower pattern.</li><li>Ball and clawfeet</li>',
		soldOut: false,
	},
	{
		name: " Glass Table Set",
		type: "antiques",
		thumb: 'img/table-set-thumb.jpg',
		image: 'img/table-set.jpg',
		price: 99.99,
		description: '<li>Two end tables, One sofa table</li><li>One coffee table</li><li>Cherry with glass tops</li><li>Ball and clawfeet</li>',
		soldOut: false,
	},

	//	APPLIANCES	//
	{
		name: "Side-by-Side Refrigerator",
		type: "appliances",
		thumb: 'img/fridge-ice-thumb.jpg',
		image: 'img/fridge-ice.jpg',
		price: 249.99,
		description: '<li><span>Dimensions:</span> 12" x 18" x 36" </li><li>Water/Ice dispenser build into door</li>',
		soldOut: true,
	},
	{
		name: "Refrigerator / Freezer",
		type: "appliances",
		thumb: 'img/fridge-thumb.jpg',
		image: 'img/fridge.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 24" x " </li><li>Comes with 1000 tokens, machine key. Fully functional.</li>',
		soldOut: false,
	},
	{
		name: "Upright Freezer",
		type: "appliances",
		thumb: 'img/freezer-tall-thumb.jpg',
		image: 'img/freezer-tall.jpg',
		price: 199.99,
		description: '<li><span>Dimensions:</span> 12" x 18" x 36" </li><li></li>',
		soldOut: true,
	},
	{
		name: "Freezer Chest",
		type: "appliances",
		thumb: 'img/freezer-chest-thumb.jpg',
		image: 'img/freezer-chest.jpg',
		price: 34.99,
		description: '<li><span>Dimensions:</span> 12" x 18" x 36" </li><li></li>',
		soldOut: false,
	},
	{
		name: "BONUS RUSH Slot Machine",
		type: "appliances",
		thumb: 'img/slots-thumb.jpg',
		image: 'img/slots.jpg',
		price: 49.99,
		description: '<li><span>Dimensions:</span> 12" x 18" x 36" </li><li>Comes with 1000 tokens, machine key. Fully functional.</li>',
		soldOut: false,
	},
	{
		name: "Canon Printer",
		type: "appliances",
		thumb: 'img/canon-printer-thumb.jpg',
		image: 'img/canon-printer.jpg',
		price: 9.99,
		description: '<li>Canon Pixma iP1700 unopened</li>',
		soldOut: false,
	},

	//	OTHER	//
	{
		name: "Treadmill Exercise Machine",
		type: "other",
		thumb: 'img/treadmill-thumb.jpg',
		image: 'img/treadmill.jpg',
		price: 24.99,
		description: '<li></li>',
		soldOut: false,
	},
	{
		name: "Schwinn Exercise Bike",
		type: "other",
		thumb: 'img/bike-thumb.jpg',
		image: 'img/bike.jpg',
		price: 34.99,
		description: '<li></li>',
		soldOut: false,
	},
	];
}]);


myApp.directive("itemList", function() {
	return {
		restrict: "E",
		scope: {
			listing: '=',
		},
		templateUrl: "js/directives/itemList.html"
	};
});

myApp.filter('htmlConvert', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
