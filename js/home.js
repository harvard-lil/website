var peopleCount = 1,
bigProjectCount = 1,
smallProjectCount = 1,
blogCount = 1;

$(function () { 
  $.ajaxSetup({ cache: false });
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=?&q=' + encodeURIComponent('http://librarylab.law.harvard.edu/blog/feed/'),
    dataType: 'json',
    success: function(data) {
      $.each(data.responseData.feed.entries, function(){
        var $html = $('<div>',{html:this.content}).hide().appendTo('body');
        var content = $html.text()
        $('#blog' + blogCount).html('<h4>' + this.title + '</h4><div class="description">' + content + '</div>');
        blogCount++;
            
        /*if(this.content.match(/(<img.*?>)/gi)) {
          var firstimage = this.content.match(/(<img.*?>)/gi)[0].match(/src="(.*?)"/)[1];
          firstimage = firstimage.replace('s640', 's144');
          $('#response').append('<p><a href="' + this.link + '">' + this.title + '</a><br /><img src="' + firstimage + '" /></p>');
        }*/
      });
    }
  });
  $.getJSON('js/about.json', function(data) {
    data.people.sort(function (a, b) {return Math.random() - 0.5;});
    $.each(data.people, function(){
      var source = $("#people-template").html();
		  var template = Handlebars.compile(source);
      $('#people' + peopleCount).html(template(this));
      peopleCount++;
    });
	});
	$.getJSON('js/projects.json', function(data) {console.log(data);
	  data.projects.big.sort(function (a, b) {return Math.random() - 0.5;});
	  data.projects.small.sort(function (a, b) {return Math.random() - 0.5;});
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
	});
});