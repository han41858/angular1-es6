/**
 * Created by Han on 2016-11-15.
 */

export default class HomeCtrl {
	constructor ($scope) {
		console.log('HomeCtrl.constructor()');

		this.$scope = $scope;

		this.count = 0;
	}

	select () {
		console.log('HomeCtrl.select()');

		return Promise.resolve()
			.then(() => {
				this.count++;

				this.$scope.$apply();
			});
	}
}