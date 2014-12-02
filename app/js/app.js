'use strict'

angular.module('blogger',
  ['ngCookies',
  'ngSanitize',
  'ngResource',
  'ngAnimate',
  'ui.router',
  'blogger.admin',
  'blogger.posts',
  'blogger.controllers',
  'blogger.directives',
  'blogger.filters',
  'blogger.services']);

angular.module('blogger').config(['$httpProvider',function($httpProvider){
    
    $httpProvider.defaults.withCredentials = true;

}]);

angular.module('blogger').run(['$state',function($state){
      $state.go('allPosts');
}]);