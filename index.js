/**
 * Created by Han on 2016-11-15.
 */

import angular from 'angular';
import ngRoute from 'angular-route';

import HomeCtrl from './view/homeCtrl';
import MyDirective from './view/MyDirective';
import MyService from './view/MyService';

import uppercase from './view/uppercase.filter';

(() => {
	console.log('main()');

	const ngApp = angular.module('angular1es6', ['ngRoute']);

	ngApp.config(($routeProvider, $locationProvider) => {
		console.log('this is angular config');

		$routeProvider
			.when('/', {
				template : require('./view/home.pug'),
				controller : 'HomeCtrl',
				controllerAs : 'Ctrl'
			})
			.otherwise({
				redirectTo : '/'
			});

		// need to angular.js routing
		$locationProvider.html5Mode({
			enabled : true,
			requireBase : false
		});
	});

	ngApp.controller('HomeCtrl', HomeCtrl);

	ngApp.directive('myDirective', () => new MyDirective);
	ngApp.service('MyService', MyService);
	ngApp.filter('uppercase', uppercase);
})();