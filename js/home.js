var peopleCount = 1,
bigProjectCount = 1,
smallProjectCount = 1,
blogCount = 1;

$(function () { 
  $.ajaxSetup({ cache: false });
  
	$('.blog').live('click', function(event) {
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
	
	  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=3&callback=?&q=' + encodeURIComponent('http://librarylab.law.harvard.edu/blog/feed/'),
    dataType: 'json',
    success: function(data) {
      $.each(data.responseData.feed.entries, function(){
        var $html = $('<div>',{html:this.content}).hide().appendTo('body');
        this.content = $html.text();
        var source = $("#blog-template").html();
		    var template = Handlebars.compile(source);
        $('#blog' + blogCount).html(template(this));
        blogCount++;
            
        /*if(this.content.match(/(<img.*?>)/gi)) {
          var firstimage = this.content.match(/(<img.*?>)/gi)[0].match(/src="(.*?)"/)[1];
          firstimage = firstimage.replace('s640', 's144');
          $('#response').append('<p><a href="' + this.link + '">' + this.title + '</a><br /><img src="' + firstimage + '" /></p>');
        }*/
      });
      $(".post").dotdotdot();
    }
  });
});