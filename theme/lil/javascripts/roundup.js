var item_url = "http://librarylab.law.harvard.edu/roundup/api/item";
$(document).ready(function() {
 
  showHopper();
 
});

function showHopper() {
  $.getJSON(item_url + '/recent?items=5&callback=?', function(data) {
    var items = [];
    $.each(data.items, function(key, val) {
      items.push('<div class="roundup-post"><div class="roundup-post-date"> ' + val.date + '</div><div class="roundup-post-content"><strong class="roundup-post-title"><a href="' + val.link + '">' + val.title + '</a></strong><span class="roundup-post-logline">' + val.description + '</span></div><div class="roundup-post-author">' + val.creator + '</div></div>');
    });
    var roundup = items.join('');
    console.log(roundup);
    $('#hopper').html(roundup);
});
}

