var peopleCount = 1,
bigProjectCount = 1,
smallProjectCount = 1,
blogCount = 1;

$(function () { 
  $.ajaxSetup({ cache: false });
  
	$('.blog-post').live('click', function(event) {
		var link = $(this).find('a').attr('href');
		window.open(link);
		event.preventDefault();
	});
	
	var src = '',
	hoverSrc = '';
	$("body").on("mouseenter", ".mug", function(event) {
    src = $(this).attr("src");
		hoverSrc = src.replace(".png", "-hover.png");
		$(this).attr("src",hoverSrc);
  }).on("mouseleave", ".mug", function(event) {
    $(this).attr("src",src);
  });
  
  $("body").on("mouseenter", ".hover", function(event) {
		$(this).attr("src", $(this).attr('data-image-hover'));
  }).on("mouseleave", ".hover", function(event) {
    $(this).attr("src", $(this).attr('data-image'));
  });
  
	$.getJSON('js/ingredients.json', function(data) {
	  data.projects.big.sort(function (a, b) {return Math.random() - 0.5;});
	  data.projects.small.sort(function (a, b) {return Math.random() - 0.5;});
	  data.people.sort(function (a, b) {return Math.random() - 0.5;});
    $.each(data.projects.big, function(){
      var source = $("#big-template").html();
		  var template = Handlebars.compile(source);
      $('#bigProject' + bigProjectCount).html(template(this));
      bigProjectCount++;
    });
    $.each(data.projects.small, function(){
      var source = $("#big-template").html();
		  var template = Handlebars.compile(source);
      $('#smallProject' + smallProjectCount).html(template(this));
      smallProjectCount++;
    });
    $.each(data.people, function(){
      var source = $("#people-template").html();
		  var template = Handlebars.compile(source);
      $('#people' + peopleCount).html(template(this));
      peopleCount++;
    });
	});
	
	$.getJSON('feed.php', function(data) {
	  $.each(data.items, function(){
      var source = $("#blog-template").html();
		  var template = Handlebars.compile(source);
      $('#blog' + blogCount).html(template(this));
      blogCount++;
    });
	});
});