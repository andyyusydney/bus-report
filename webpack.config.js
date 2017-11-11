/*
	./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
})
const CopyWebpackPlugin = require('copy-webpack-plugin');
			
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new CopyWebpackPlugin([               
			// Copy directory contents to /build
			{ from: 'src/data', to: './data' }
		]) 
	]
}