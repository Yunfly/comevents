$(document).ready(function(){
	$(".deleteEvent").click(function() {
		deleteId = $(this).data('delete');
		$.ajax({
			url:'/events/delete/'+deleteId,
			type:'DELETE',
			success:function(result){
				console.log('Deleted Success!')
			}
		});
		window.location = '/events';
	});
});