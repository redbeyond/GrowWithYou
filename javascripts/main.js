$(document).ready(function() {
	$('#midside2Right > * > area').mouseover(function(e) {
		showMidSide1RightInfo(e);
	});
});

function showMidSide1RightInfo(e) {
	var infoID = e.target.id + 'Nav';
	$('#midside1Right').html($('#' + infoID).html());
}
