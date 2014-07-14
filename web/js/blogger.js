var apiKey = "AIzaSyBqUaquZh_9bXxCYQr5T1eruhABr9fPG4w"
var blogID = "3295796553627316717"
var bloggerAPI = "https://www.googleapis.com/blogger/v2/blogs/" +
                blogID +
                "/posts?alt=json&callback=?&key=" +
                apiKey;
var response = $.getJSON(bloggerAPI).done(
  function ( data ) {
    for (var i=0;i < 4;i++) {
    	$('#post' + i).append($('<a class="button button-block button-rounded button-large" href="' +
                  response.responseJSON.items[i].url + '">' +
                  response.responseJSON.items[i].title +'</a>'));
    };
  }
);
