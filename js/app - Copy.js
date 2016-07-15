var myApp=angular.module("myApp",[]);$(function(){$("#furniture").change(function(){$(".furniture").toggleClass("hidden").parent().toggleClass("col-md-4")}),$("#antiques").change(function(){$(".antiques").toggleClass("hidden").parent().toggleClass("col-md-4")}),$("#appliances").change(function(){$(".appliances").toggleClass("hidden").parent().toggleClass("col-md-4")}),$("#other").change(function(){$(".other").toggleClass("hidden").parent().toggleClass("col-md-4")})}),!function(e){"use strict";function i(e,t){if(!(this instanceof i)){var n=new i(e,t);return n.open(),n}this.id=i.id++,this.setup(e,t),this.chainCallbacks(i._callbackChain)}if("undefined"==typeof e)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var t=[],n=function(i){return t=e.grep(t,function(e){return e!==i&&e.$instance.closest("body").length>0})},a=function(e,i){var t={},n=new RegExp("^"+i+"([A-Z])(.*)");for(var a in e){var r=a.match(n);if(r){var s=(r[1]+r[2].replace(/([A-Z])/g,"-$1")).toLowerCase();t[s]=e[a]}}return t},r={keyup:"onKeyUp",resize:"onResize"},s=function(t){e.each(i.opened().reverse(),function(){return t.isDefaultPrevented()||!1!==this[r[t.type]](t)?void 0:(t.preventDefault(),t.stopPropagation(),!1)})},o=function(t){if(t!==i._globalHandlerInstalled){i._globalHandlerInstalled=t;var n=e.map(r,function(e,t){return t+"."+i.prototype.namespace}).join(" ");e(window)[t?"on":"off"](n,s)}};i.prototype={constructor:i,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:e.noop,beforeContent:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterContent:e.noop,afterClose:e.noop,onKeyUp:e.noop,onResize:e.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(i,t){"object"!=typeof i||i instanceof e!=0||t||(t=i,i=void 0);var n=e.extend(this,t,{target:i}),a=n.resetCss?n.namespace+"-reset":n.namespace,r=e(n.background||['<div class="'+a+"-loading "+a+'">','<div class="'+a+'-content">','<span class="'+a+"-close-icon "+n.namespace+'-close">',n.closeIcon,"</span>",'<div class="'+n.namespace+'-inner">'+n.loading+"</div>","</div>","</div>"].join("")),s="."+n.namespace+"-close"+(n.otherClose?","+n.otherClose:"");return n.$instance=r.clone().addClass(n.variant),n.$instance.on(n.closeTrigger+"."+n.namespace,function(i){var t=e(i.target);("background"===n.closeOnClick&&t.is("."+n.namespace)||"anywhere"===n.closeOnClick||t.closest(s).length)&&(i.preventDefault(),n.close())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var i=this,t=this.constructor.contentFilters,n=function(e){return i.$currentTarget&&i.$currentTarget.attr(e)},a=n(i.targetAttr),r=i.target||a||"",s=t[i.type];if(!s&&r in t&&(s=t[r],r=i.target&&a),r=r||n("href")||"",!s)for(var o in t)i[o]&&(s=t[o],r=i[o]);if(!s){var l=r;if(r=null,e.each(i.contentFilters,function(){return s=t[this],s.test&&(r=s.test(l)),!r&&s.regex&&l.match&&l.match(s.regex)&&(r=l),!r}),!r)return"console"in window&&window.console.error("Featherlight: no content filter found "+(l?' for "'+l+'"':" (no target specified)")),!1}return s.process.call(i,r)},setContent:function(i){var t=this;return(i.is("iframe")||e("iframe",i).length>0)&&t.$instance.addClass(t.namespace+"-iframe"),t.$instance.removeClass(t.namespace+"-loading"),t.$instance.find("."+t.namespace+"-inner").not(i).slice(1).remove().end().replaceWith(e.contains(t.$instance[0],i[0])?"":i),t.$content=i.addClass(t.namespace+"-inner"),t},open:function(i){var n=this;if(n.$instance.hide().appendTo(n.root),!(i&&i.isDefaultPrevented()||n.beforeOpen(i)===!1)){i&&i.preventDefault();var a=n.getContent();if(a)return t.push(n),o(!0),n.$instance.fadeIn(n.openSpeed),n.beforeContent(i),e.when(a).always(function(e){n.setContent(e),n.afterContent(i)}).then(n.$instance.promise()).done(function(){n.afterOpen(i)})}return n.$instance.detach(),e.Deferred().reject().promise()},close:function(i){var t=this,a=e.Deferred();return t.beforeClose(i)===!1?a.reject():(0===n(t).length&&o(!1),t.$instance.fadeOut(t.closeSpeed,function(){t.$instance.detach(),t.afterClose(i),a.resolve()})),a.promise()},chainCallbacks:function(i){for(var t in i)this[t]=e.proxy(i[t],this,e.proxy(this[t],this))}},e.extend(i,{id:0,autoBind:"[data-featherlight]",defaults:i.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(i){return i instanceof e&&i},process:function(i){return this.persist!==!1?e(i):e(i).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(i){var t=this,n=e.Deferred(),a=new Image,r=e('<img src="'+i+'" alt="" class="'+t.namespace+'-image" />');return a.onload=function(){r.naturalWidth=a.width,r.naturalHeight=a.height,n.resolve(r)},a.onerror=function(){n.reject(r)},a.src=i,n.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(i){return e(i)}},ajax:{regex:/./,process:function(i){var t=e.Deferred(),n=e("<div></div>").load(i,function(e,i){"error"!==i&&t.resolve(n.contents()),t.fail()});return t.promise()}},iframe:{process:function(i){var t=new e.Deferred,n=e("<iframe/>").hide().attr("src",i).css(a(this,"iframe")).on("load",function(){t.resolve(n.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return t.promise()}},text:{process:function(i){return e("<div>",{text:i})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(i,t){var n=this,a=new RegExp("^data-"+t+"-(.*)"),r={};return i&&i.attributes&&e.each(i.attributes,function(){var i=this.name.match(a);if(i){var t=this.value,s=e.camelCase(i[1]);if(e.inArray(s,n.functionAttributes)>=0)t=new Function(t);else try{t=e.parseJSON(t)}catch(o){}r[s]=t}}),r},extend:function(i,t){var n=function(){this.constructor=i};return n.prototype=this.prototype,i.prototype=new n,i.__super__=this.prototype,e.extend(i,this,t),i.defaults=i.prototype,i},attach:function(i,t,n){var a=this;"object"!=typeof t||t instanceof e!=0||n||(n=t,t=void 0),n=e.extend({},n);var r,s=n.namespace||a.defaults.namespace,o=e.extend({},a.defaults,a.readElementConfig(i[0],s),n);return i.on(o.openTrigger+"."+o.namespace,o.filter,function(s){var l=e.extend({$source:i,$currentTarget:e(this)},a.readElementConfig(i[0],o.namespace),a.readElementConfig(this,o.namespace),n),c=r||e(this).data("featherlight-persisted")||new a(t,l);"shared"===c.persist?r=c:c.persist!==!1&&e(this).data("featherlight-persisted",c),l.$currentTarget.blur(),c.open(s)}),i},current:function(){var e=this.opened();return e[e.length-1]||null},opened:function(){var i=this;return n(),e.grep(t,function(e){return e instanceof i})},close:function(){var e=this.current();return e?e.close():void 0},_onReady:function(){var i=this;i.autoBind&&(e(i.autoBind).each(function(){i.attach(e(this))}),e(document).on("click",i.autoBind,function(t){t.isDefaultPrevented()||(t.preventDefault(),i.attach(e(t.currentTarget)),e(t.target).click())}))},_callbackChain:{onKeyUp:function(e,i){return 27===i.keyCode?(this.closeOnEsc&&this.$instance.find("."+this.namespace+"-close:first").click(),!1):e(i)},onResize:function(e,i){if(this.$content.naturalWidth){var t=this.$content.naturalWidth,n=this.$content.naturalHeight;this.$content.css("width","").css("height","");var a=Math.max(t/parseInt(this.$content.parent().css("width"),10),n/parseInt(this.$content.parent().css("height"),10));a>1&&this.$content.css("width",""+t/a+"px").css("height",""+n/a+"px")}return e(i)},afterContent:function(e,i){var t=e(i);return this.onResize(i),t}}}),e.featherlight=i,e.fn.featherlight=function(e,t){return i.attach(this,e,t)},e(document).ready(function(){i._onReady()})}(jQuery),myApp.controller("ItemController",["$scope",function(e){e.testItem={name:"This is the name",image:"../img/dice.jpg",price:"9.99"},e.saleItems=[{name:"Oak Colored Cabinets",type:"furniture",thumb:"img/cabinet1-thumb.jpg",image:"img/cabinet1.jpg",price:49.99,description:'<li><span>Dimensions:</span> 60" x 30" 18" </li><li> Solid Build, 3 shelves  </li></li><li><span> Price per cabinet*</span></li><li></li>',soldOut:!1},{name:"Oak Colored DVD Cabinets",type:"furniture",thumb:"img/dvd-cabinet-thumb.jpg",image:"img/dvd-cabinet.jpg",price:9.99,description:'<li><span>Dimensions:</span> 45" x 12" 6" </li><li> 4 shelves  </li><li><span> Price per cabinet*</span></li>',soldOut:!1},{name:"Black DVD 360 Swivel",type:"furniture",thumb:"img/dvd-case-thumb.jpg",image:"img/dvd-case.jpg",price:29.99,description:'<li><span>Dimensions:</span> 36" x 12" 12"</li><li> </li><li> </li>',soldOut:!1},{name:"Jewelry Closet",type:"furniture",thumb:"img/mirror-box-thumb.jpg",image:"img/mirror-box.jpg",price:99.99,description:'<li><span>Dimensions:</span> 18" x 60"</li><li>3 side mirrors and 3 doors</li><li>Full 360&deg; swivel</li>',soldOut:!1},{name:"Black Side Tables",type:"furniture",thumb:"img/side-table-thumb.jpg",image:"img/side-table.jpg",price:29.99,description:'<li><span>Dimensions:</span> 24" x 12"</li><li> Black with Limestone top </li><li> Magazine rack on bottom</li>',soldOut:!1},{name:"Bar Height Round Table",type:"furniture",thumb:"img/round-table-thumb.jpg",image:"img/round-table.jpg",price:99.99,description:'<li><span>Dimensions:</span> 36" Height</li><li> Sides raise up for larger table. </li><li> Includes two chairs</li>',soldOut:!1},{name:"Kitchen Table + 4 chairs",type:"furniture",thumb:"img/dining-table-oak-thumb.jpg",image:"img/dining-table-oak.jpg",price:99.99,description:'<li><span>Dimensions:</span> 42" x 42" x 30" </li>',soldOut:!1},{name:"Plastic 6 Drawer Cabinet",type:"furniture",thumb:"img/plastic-cabinet-thumb.jpg",image:"img/plastic-cabinet.jpg",price:9.99,description:'<li><span>Dimensions:</span> 32" x 20" x 15" </li>',soldOut:!1},{name:"Two Nightstands and Armoire",type:"furniture",thumb:"img/nightstands-armoire-thumb.jpg",image:"img/nightstands-armoire.jpg",price:149.99,description:'<li><span>Nightstand Dimensions:</span> 30" x 16" x 26"</li><li><span>Armoire Dimensions:</span> 40" x 62" x 26"</li><li>Two doors open to shelf and two drawers, two bottom drawers</li>',soldOut:!1},{name:"Chocolate Brown Love Seat",type:"furniture",thumb:"img/loveseat-thumb.jpg",image:"img/loveseat.jpg",price:99.99,description:"<li></li>",soldOut:!1},{name:"Black TV Stand",type:"furniture",thumb:"img/tv-stand-thumb.jpg",image:"img/tv-stand.jpg",price:49.99,description:'<li><span>Dimensions:</span> 42" x 26" x 20" </li><li>Two side cabinets, two shelves in center</li>',soldOut:!1},{name:"Medium Colored Dresser",type:"furniture",thumb:"img/dresser-thumb.jpg",image:"img/dresser.jpg",price:39.99,description:'<li><span>Dimensions:</span> 46" x 46" x 20" </li>',soldOut:!1},{name:"Dining Table",type:"furniture",thumb:"img/legless-table-thumb.jpg",image:"img/legless-table.jpg",price:49.99,description:"<li>Legs included (not shown in photo)</li>",soldOut:!1},{name:"16 Slot Cubby Cabinet",type:"furniture",thumb:"img/21-cubby-thumb.jpg",image:"img/21-cubby.jpg",price:19.99,description:"<li></li>",soldOut:!1},{name:"8 Slot Cubby Chest",type:"furniture",thumb:"img/9-cubby-thumb.jpg",image:"img/9-cubby.jpg",price:19.99,description:"<li></li>",soldOut:!1},{name:"2 Slot Side Cubby",type:"furniture",thumb:"img/side-cubby-thumb.jpg",image:"img/side-cubby.jpg",price:9.99,description:"<li></li>",soldOut:!1},{name:"Small White Desk",type:"furniture",thumb:"img/white-desk-thumb.jpg",image:"img/white-desk.jpg",price:24.99,description:"<li>Pink and Blue stripe</li>",soldOut:!1},{name:"White Nightstands",type:"furniture",thumb:"img/white-nightstands-thumb.jpg",image:"img/white-nightstands.jpg",price:19.99,description:"<li>Price per Nightstand</li>",soldOut:!1},{name:"Cherry Sleigh Day Bed",type:"furniture",thumb:"img/daybed-thumb.jpg",image:"img/daybed.jpg",price:99.99,description:"<li>Twin sized bed and includes matress</li>",soldOut:!1},{name:"Two Shelf Bookcase",type:"furniture",thumb:"img/blue-shelf-thumb.jpg",image:"img/blue-shelf.jpg",price:4.99,description:'<li><span>Dimensions:</span></li><li> 12" x 30" x 30"</li>',soldOut:!1},{name:"Australian Blackwood Dining Table",type:"antiques",thumb:"img/dining-table-blackwood-thumb.jpg",image:"img/dining-table-blackwood.jpg",price:999.99,description:'<li><span>Dimensions:</span> 68" x 44" and Three 12" leaves</li><li>Crank handle to put side leafs in or out.</li><li>6 Ornate chairs with cane seats included.</li>',soldOut:!1},{name:"Dark Oak Buffet",type:"antiques",thumb:"img/buffet-thumb.jpg",image:"img/buffet.jpg",price:349.99,description:'<li><span>Dimensions:</span> 65" x 42"</li><li>Two upper drawers, two center drawers, two side cabinets.</li>',soldOut:!1},{name:"Dark Oak Table",type:"antiques",thumb:"img/oak-table-thumb.jpg",image:"img/oak-table.jpg",price:149.99,description:'<li><span>Dimensions:</span> 24" x 28" x 18" with two 12" sides</li><li>Two folding sides, one drawer in front</li>',soldOut:!1},{name:"Hall Tree",type:"antiques",thumb:"img/coattree-thumb.jpg",image:"img/coattree.jpg",price:24.99,description:"<li></li>",soldOut:!1},{name:"Ornate Tall Mirror",type:"antiques",thumb:"img/mirror-thumb.jpg",image:"img/mirror.jpg",price:299.99,description:'<li><span>Dimensions:</span> 24" x 28" x 18" with two 12" sides</li>',soldOut:!1},{name:"Ornate Preacher Bench and Table",type:"antiques",thumb:"img/preacher-thumb.jpg",image:"img/preacher.jpg",price:399.99,description:'<li><span>Dimensions:</span> 48" x 54" x 24"</li><li>Cream background with flowers, matches fainting couch.</li>',soldOut:!1},{name:"Fainting Couch",type:"antiques",thumb:"img/fainting-couch-thumb.jpg",image:"img/fainting-couch.jpg",price:499.99,description:'<span>Dimensions</span> 52" x 86" x 26"</li><li>Cream background with flowers, matches preacher bench.</li>',soldOut:!1},{name:"Victorian Style Wingback Chair",type:"antiques",thumb:"img/wingback-chairs-thumb.jpg",image:"img/wingback-chairs.jpg",price:199.99,description:'<span>Dimensions</span> 52" x 86" x 26"</li><li>Salmon color with stripes and flower pattern.</li><li>Ball and clawfeet</li>',soldOut:!1},{name:"Table Set",type:"antiques",thumb:"img/table-set-thumb.jpg",image:"img/table-set.jpg",price:199.99,description:"<li>Two end tables, One sofa table</li><li>One coffee table</li><li>Cherry with glass tops</li><li>Ball and clawfeet</li>",soldOut:!1},{name:"Side-by-Side Refrigerator",type:"appliances",thumb:"img/fridge-ice-thumb.jpg",image:"img/fridge-ice.jpg",price:249.99,description:'<li><span>Dimensions:</span> 12" x 18" x 36" </li><li>Water/Ice dispenser build into door</li>',soldOut:!1},{name:"Refrigerator / Freezer",type:"appliances",thumb:"img/fridge-thumb.jpg",image:"img/fridge.jpg",price:74.99,description:'<li><span>Dimensions:</span> 24" x " </li><li>Comes with 1000 tokens, machine key. Fully functional.</li>',soldOut:!1},{name:"Upright Freezer",type:"appliances",thumb:"img/freezer-tall-thumb.jpg",image:"img/freezer-tall.jpg",price:199.99,description:'<li><span>Dimensions:</span> 12" x 18" x 36" </li><li></li>',soldOut:!1},{name:"Freezer Chest",type:"appliances",thumb:"img/freezer-chest-thumb.jpg",image:"img/freezer-chest.jpg",price:74.99,description:'<li><span>Dimensions:</span> 12" x 18" x 36" </li><li></li>',soldOut:!1},{name:"BONUS RUSH Slot Machine",type:"appliances",thumb:"img/slots-thumb.jpg",image:"img/slots.jpg",price:99.99,description:'<li><span>Dimensions:</span> 12" x 18" x 36" </li><li>Comes with 1000 tokens, machine key. Fully functional.</li>',soldOut:!1},{name:"Canon Printer",type:"appliances",thumb:"img/canon-printer-thumb.jpg",image:"img/canon-printer.jpg",price:24.99,description:"<li>Canon Pixma iP1700 unopened</li>",soldOut:!1},{name:"Treadmill Exercise Machine",type:"other",thumb:"img/treadmill-thumb.jpg",image:"img/treadmill.jpg",price:49.99,description:"<li></li>",soldOut:!1},{name:"Schwinn Exercise Bike",type:"other",thumb:"img/bike-thumb.jpg",image:"img/bike.jpg",price:74.99,description:"<li></li>",soldOut:!1}]}]),myApp.directive("itemList",function(){return{restrict:"E",scope:{listing:"="},templateUrl:"js/directives/itemList.html"}}),myApp.filter("htmlConvert",function(e){return function(i){return e.trustAsHtml(i)}});