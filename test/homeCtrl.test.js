import HomeCtrl from '../view/homeCtrl';

describe('homeCtrl.test', () => {

	it('module import', () => {
		expect(true).to.be.true;
	});

	describe('http test', () => {
		const $injector = angular.injector(['angular1es6']);
		const $httpBackend = $injector.get('$httpBackend');
		const $http = $injector.get('$http');

		beforeEach(() => {
			// $httpBackend.expectGET('/test')
			// 	.respond(['this', 'is', 'GET', 'test', 'data']);

			$httpBackend.expectGET('/test')
				.respond(() => {
					return [200, { result : true }, {}];
				});
		});

		it('ok', () => {
			return new Promise(resolve => {
				$http.get('/test').then(result => {
					console.log('get().then()');
					console.log(result);
					console.log(result.data);
					resolve(true);
				});

				$httpBackend.flush();
			});
		});
	});
});