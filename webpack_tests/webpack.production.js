const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
	filename: '[name].css'
});

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

module.exports = {
	entry: {
		app: path.join(PATHS.app, 'js')
	},
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Goalspriing',
			template: 'app/index.ejs'
		}),
		extractPlugin
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				include: PATHS.app,
				enforce: 'pre',

				loader: 'eslint-loader'
			},
			{
				test: /\.css$/,
				use: extractPlugin.extract({
					use: ['css-loader', {
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer'), require('postcss-focus')
								]
							}
						}],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.scss$/,
				include: PATHS.app,
				enforce: 'pre',
				loader: 'postcss-loader',
				options: {
					syntax: require('postcss-scss'),
					plugins: () => ([
						require('stylelint')({
							ignoreFiles: 'node_modules/**/*.scss'
						}),
					]),
				},
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: ['css-loader', 
						{
							loader: 'postcss-loader',
							options: {
								plugins: [require('autoprefixer'), require('postcss-focus')]
							}
						},
						'resolve-url-loader', 'sass-loader?sourceMap'],
					fallback: 'style-loader'
				})
			},
		]
	}
};