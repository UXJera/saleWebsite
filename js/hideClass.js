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