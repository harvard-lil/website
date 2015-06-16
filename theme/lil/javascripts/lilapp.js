$(document).ready(function() {
	var winHeight = $( window ).height();
	var winWidth = $( window ).width();
	var winMax = winWidth * 1.8;
	if ( winHeight < winMax ) {
		$('body.home header').height(winHeight);
	} else {
		$('body.home header').height(winMax);
	}
});
