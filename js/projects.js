var bigProjectCount = 1,
smallProjectCount = 1;

$(function () { 
	$('body').delegate('.description', 'click', function(e) {
		var link = $(this).find('a').attr('href');
		window.location = link;
		e.preventDefault();
	});
	
	$("body").on("mouseenter", ".hover", function(event) {
		$(this).attr("src", $(this).attr('data-image-hover'));
  }).on("mouseleave", ".hover", function(event) {
    $(this).attr("src", $(this).attr('data-image'));
  });
  
	$.getJSON('js/ingredients.json', function(data) {
    $.each(data.projects.big, function(){
      var source = $("#big-template").html();
		  var template = Handlebars.compile(source);
      $('#biggerProject' + bigProjectCount).html(template(this));
      bigProjectCount++;
    });
    $.each(data.projects.small, function(){
      var source = $("#big-template").html();
		  var template = Handlebars.compile(source);
      $('#smallerProject' + smallProjectCount).html(template(this));
      smallProjectCount++;
    });
	});

});