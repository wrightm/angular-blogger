'use strict'

angular.module('blogger.admin',['blogger.admin.controllers','blogger.admin.directives','blogger.admin.services','blogger.admin.filters']);

angular.module('blogger.admin').config(['$stateProvider',function($stateProvider){
    $stateProvider.state('login',{
        url:'/login',
        controller: 'LoginController',
        resolve:{
            user:['authService','$q',function(authService,$q){
                if(authService.user){
                    return $q.reject({authorized:true});
                }
            }]
        },
        templateUrl:'modules/admin/views/login.html'
    }).state('admin',{
        url:'/admin',
        abstract:true,
        controller:'AdminController',
        resolve:{
            user:['authService','$q',function(authService,$q){
                return authService.user || $q.reject({unAuthorized:true});
            }]
        },
        templateUrl:'modules/admin/views/admin-home.html'
    }).state('admin.postNew',{
        url:'/posts/new',
        controller: 'PostCreationController',
        templateUrl:'modules/admin/views/admin-new-post.html'
    }).state('admin.postUpdate',{
        url:'/posts/:id/edit',
        controller: 'PostUpdateController',
        templateUrl:'modules/admin/views/admin-update-post.html'
    }).state('admin.postViewAll',{
        url:'',
        controller: 'PostListController',
        templateUrl:'modules/admin/views/admin-all-posts.html'
    });
}]).run(['$rootScope','$state','$cookieStore','authService',function($rootScope,$state,$cookieStore,authService){

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

        if(error.unAuthorized) {
            $state.go('login');
        }
        else if(error.authorized){
            $state.go('admin.postViewAll');
        }
    });

    authService.user=$cookieStore.get('user');

}]);