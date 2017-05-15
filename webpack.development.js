const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

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
		})
	],
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		host: process.env.HOST,
		port: process.env.PORT,
		overlay: {
			errors: true,
			warnings: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						plugins: () => ([
							require('autoprefixer')
						])
					}
				},
				'resolve-url-loader', 'sass-loader?sourceMap']
			},
		]
	}
};