myApp.filter('htmlConvert', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});