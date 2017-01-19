$(document).ready(function(){
	$('.send').on('click', sendAjax);
});
function sendAjax(){
	$.get(
		"message.php",
		{
			"email" : $('#email').val(),
			"name" : $('#name').val(),
			"msg" : $('#comment').val()
		},
		ifSuccess
		);
}
function ifSuccess (data) {
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
