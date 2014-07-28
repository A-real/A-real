var CommentRef = new Firebase('https://amber-fire-3032.firebaseIO.com/adventureForBreakfastComments');


CommentRef.on('child_added', function(snapshot) {
  var child = snapshot.val();
  var comment = child.comment;
  var submitter = child.submitter;
    buildComment(comment, submitter);
});


function buildComment (comment, submitter) {
	$('#comments').append('<div class="comment"><p>' +
		comment +
		'</p></div><div class="submitter"><p>Submitted by:' +
		submitter +
		'</p><hr></div>'
		);
}

function pushComment () {
	var commentComment = $('#commentComment').val();
	var commentSubmitter = $('#commentSubmitter').val();;
	CommentRef.push({
    submitter:commentSubmitter,
    comment:commentComment
  });
};

$('#commentForm').submit(function( event ) {
	event.preventDefault();
	pushComment();
	$('#commentForm').hide();
});

