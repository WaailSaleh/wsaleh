$(document).ready(function() {
var postlist = [] ;
	//   Get Ajax
$.ajax({
	method:'GET',
	url:'https://jsonplaceholder.typicode.com/posts',
	dataType: 'json'
}).done( function (data) {
	 $.map(data, function (post, body) {
	$('.content').append('<h3 class =\"post\"> '+
		post.title +' </h3> <p class =/"body/">'+
		 post.body+'</p>');
 
	});
	 
	console.log('posts saved');
	postlist = data;
	console.log(postlist);
});


// Post Ajax
	 $('#post').submit(function(e){
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url,{title:title, body:body}).
        done(function(data) {
        	$('.content').append('<h3 class =\"post\"> '+
		title +' </h3> <p class =/"body/">'+
		body+'</p>'); 
        postlist.push({userId:postlist[postlist.length-1].userId +1 ,
         id:postlist[postlist.length-1].id +1, title:title, body:body})
        
            console.log('post saved');
            console.log(postlist);
        });

    });
});