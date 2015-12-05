$(document).ready(function() {
	$('#midside2Right > * > area').mouseover(function(e) {
		showMidSide1RightInfo(e);
	});
	$('#midside2Left > * > area').mouseover(function(e) {
		showMidSide1LeftInfo(e);
	});
});

function showMidSide1RightInfo(e) {
	var infoID = e.target.id + 'Nav';
	$('#midside1Right').html($('#' + infoID).html());
}

function showMidSide1LeftInfo(e) {
	var infoID = e.target.id + 'Nav';
	$('#midside1Left').html($('#' + infoID).html());
}
