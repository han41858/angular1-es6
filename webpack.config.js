// this is ES5
var webpack = require('webpack');

module.exports = {
	entry : [
		'./index.js'
	],
	output : {
		filename : 'build/bundle.js',
		sourceMapFilename: '[name].map'
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : 'babel?presets[]=es2015', // use inline preset config for multiple loader
				exclude : /node_modules/
			},
			{
				test : /\.pug$/,
				loader : 'pug-loader',
				exclude : /node_modules/
			}
		]
	},
	plugins : [
		// new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
};
