'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl',
		/*
				add a resolve block that retrieves all the users
				so that the author field of the posts will be automatically 
				populated
		*/
		resolve: {
	 		theUsers: function(User){
	 			return User.findAll();
	 		},
	 		thePost: function(Post,$stateParams,theUsers){
	 			return Post.find($stateParams.postId);
	 		}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope,theUsers,thePost) {


	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
	$scope.post = thePost;
	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})