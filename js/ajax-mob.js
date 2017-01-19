$(document).ready(function(){
	$('.send-mob').on('click', sendAjaxMob);

});
function sendAjaxMob(){
	$.get(
		"message.php",
		{
			"email" : $('#email-mob').val(),
			"name" : $('#name-mob').val(),
			"msg" : $('#comment-mob').val()
		},
		ifSuccessMob
		);
}
function ifSuccessMob (data) {
	if (data==1){
		$('#send-res').html('Message sent successfully!');
		$('#resultModal').modal('show');
		setTimeout(function(){
		    $('#resultModal').modal('hide');
		}, 3000);
		}
	else {
		$('#send-res').html('Check the entered data.');
		$('#resultModal').modal('show');
	}
}
