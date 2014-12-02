'use strict'

angular.module('blogger.posts',['blogger.posts.controllers','blogger.posts.directives','blogger.posts.services','blogger.posts.filters']);

angular.module('blogger.posts').config(['$stateProvider',function($stateProvider){
	$stateProvider.state('allPosts',{
		url:'/posts',
		templateUrl: 'modules/posts/views/posts.html',
		controller: 'PostController'
	});
	$stateProvider.state('singlePost',{
		url:'/posts/:id/:permalink',
		templateUrl: 'modules/posts/views/singlePost.html',
		controller: 'PostDetailsController'
	});
}]);