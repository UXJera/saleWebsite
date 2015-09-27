$(function() {
	$("#furniture").change(function() {
		$(".furniture").toggleClass('hidden').parent().toggleClass('col-md-4');
	});
	$("#antiques").change(function() {
		$(".antiques").toggleClass('hidden').parent().toggleClass('col-md-4');
	});
	$("#electronics").change(function() {
		$(".electronics").toggleClass('hidden').parent().toggleClass('col-md-4');
	});
	$("#other").change(function() {
		$(".other").toggleClass('hidden').parent().toggleClass('col-md-4');
	});	
});