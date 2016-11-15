/**
 * Created by Han on 2016-11-15.
 */

import angular from 'angular';
import ngRoute from 'angular-route';

import RootCtrl from './view/rootCtrl';

const main = () => {
	console.log('main()');

	const ngApp = angular.module('angular1es6', ['ngRoute']);

	ngApp.config(($routeProvider, $locationProvider) => {
		console.log('this is angular config');

		$routeProvider
			.when('/', {
				template : require('./view/rootCtrl.pug'),
				controller : 'RootCtrl',
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

	ngApp.controller('RootCtrl', RootCtrl);
};

main();