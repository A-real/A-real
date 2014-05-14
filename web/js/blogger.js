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


//Experimental Picasa Code //

// $(function(){
//     var $ul = $('ul');
//     $.ajax({
//         dataType: 'jsonp',
//         url: 'https://picasaweb.google.com/data/feed/api/user/takazudo/albumid/5579032834644034737',
//         data: {
//             alt: 'json-in-script',
//         },
//         jsonpCallback: 'picasaCallback',
//         success: function(data){
//             var photos = [];
//             $.each(data.feed.entry, function(){
//                 photos.push({
//                     src: this.content.src
//                 });
//             });
//             $('#template').tmpl({
//                 photos: photos
//             }).appendTo('#output');
//         },
//         error: function(){
//             alert('failed ;(');
//         }
//     });
// });
