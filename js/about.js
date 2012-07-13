var peopleCount = 1;

$(function () { 
	
	var src = '',
	hoverSrc = '';
	$("body").on("mouseenter", ".hover", function(event) {
    src = $(this).attr("src");
		hoverSrc = src.replace(".png", "-hover.png");
		$(this).attr("src",hoverSrc);
  }).on("mouseleave", ".hover", function(event) {
    $(this).attr("src",src);
  });
  
	$.getJSON('js/ingredients.json', function(data) {
    $.each(data.people, function(){
      var source = $("#people-template").html();
		  var template = Handlebars.compile(source);
      $('#people' + peopleCount).html(template(this));
      peopleCount++;
    });
	});

});