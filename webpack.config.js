const webpack = require('webpack');    // eslint-disable-line no-unused-vars

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/public/build/',
		publicPath: 'build/',
		filename: 'bundle.js',
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				// don't show unreachable variables etc
				warnings: false,
				drop_console: true,
				unsafe: true,
			},
		}),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: [/node_modules/, /public/],
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader',
				exclude: [/node_modules/, /public/],
			},
			{
				test: /\.gif$/,
				loader: 'url-loader?limit=10000&mimetype=image/gif',
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader?limit=10000&mimetype=image/jpg',
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=10000&mimetype=image/png',
			},
			{
				test: /\.svg/,
				loader: 'url-loader?limit=26000&mimetype=image/svg+xml',
			},
			{
				test: /\.jsx$/,
				loader: 'react-hot!babel',
				exclude: [/node_modules/, /public/],
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader',
			},
		],
	},
};
