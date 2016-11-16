/**
 * Created by Han on 2016-11-16.
 */

export default class MyDirective {
	constructor () {
		console.log('MyDirective.constructor()');

		this.restrict = 'E';
		this.template = '<p>message : {{ this.msg }}</p>';
		this.scope = {
			msg : '@'
		};

		this.click = function(){
			console.log('CLICK in constructor');
		}
	}

	controller ($scope) {
		console.log($scope.msg);
	}
}