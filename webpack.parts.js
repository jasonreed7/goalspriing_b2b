const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const webpack = require('webpack');

exports.inspectLoader = {
	loader: 'inspect-loader',
	options: {
		callback(inspect) {
			console.log(inspect.arguments);
		},
	},
};

exports.devServer = ({ host, port } = {}) => ({
	devServer: {
		historyApiFallback: true,
		stats: 'errors-only',
		host, // Defaults to `localhost`
		port, // Defaults to 8080
		overlay: {
			errors: true,
			warnings: true,
		},
	},
});

exports.lintJavaScript = ({ include, exclude, options }) => ({
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include,
				exclude,
				enforce: 'pre',

				loader: 'eslint-loader',
				options,
			},
		],
	},
});

exports.loadCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				include,
				exclude,

				use: ['style-loader', 'css-loader'],
			},
		],
	},
});

exports.loadSCSS = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.scss$/,
				include,
				exclude,

				use: ['style-loader', 'css-loader', exports.autoprefix(), 'resolve-url-loader', 'sass-loader?sourceMap'],
			},
		],
	},
});

exports.loadHTML = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.ejs$/,
				include,
				exclude,
				use: ['html-loader'],
			},
		],
	},
});

exports.extractCSS = ({ include, exclude, use }) => {
	const plugin = new ExtractTextPlugin({
		filename: '[name].[contenthash].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include,
					exclude,
					use: plugin.extract({
						use,
						fallback: 'style-loader',
					}),
				},
				{
					test: /\.scss$/,
					include,
					exclude,
					use: plugin.extract({
						use: use.concat(['resolve-url-loader', 'sass-loader?sourceMap']),
						fallback: 'style-loader',
					})
				}
			],
		},
		plugins: [ plugin ]
	};

};

exports.autoprefix = () => ({
	loader: 'postcss-loader',
	options: {
		plugins: () => ([
			require('autoprefixer')
		]),
		sourceMap: true,
	},
});


exports.lintSCSS = ({ include, exclude }) => ({
	module: {
		rules: [
			{
				test: /\.scss$/,
				include,
				exclude,
				enforce: 'pre',
				loader: 'postcss-loader',
				options: {
					syntax: 'postcss-scss',
					plugins: () => ([
						require('stylelint')({
							ignoreFiles: 'node_modules/**/*.scss'
						}),
					]),
					sourceMap: true,
				},
			},
		],
	},
});

exports.purifyCSS = ({ paths }) => ({
	plugins: [
		new PurifyCSSPlugin({ paths }),
	],
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(png|jpg|svg|gif)$/,
				include,
				exclude,

				use: {
					loader: 'url-loader',
					options,
				},
			},
		],
	},
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				// Capture eot, ttf, woff, and woff2
				test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				include,
				exclude,

				use: {
					loader: 'url-loader',
					options,
				},
			},
		],
	},
});

exports.loadJavaScript = ({ include, exclude }) => ({
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include,
				exclude,

				loader: 'babel-loader',
				options: {
					// Enable caching for improved performance during
					// development.
					// It uses default OS directory by default. If you need
					// something more custom, pass a path to it.
					// I.e., { cacheDirectory: '<path>' }
					cacheDirectory: true,
				},
			},
		],
	},
});

exports.generateSourceMaps = ({ type }) => ({
	devtool: type,
});

exports.clean = (path) => ({
	plugins: [
		new CleanWebpackPlugin([path]),
	],
});

exports.attachRevision = () => ({
	plugins: [
		new webpack.BannerPlugin({
			banner: new GitRevisionPlugin().version(),
		}),
	],
});

exports.minifyJavaScript = () => ({
	plugins: [
		new BabiliPlugin(),
	],
});

exports.minifyCSS = ({ options }) => ({
	plugins: [
		new OptimizeCSSAssetsPlugin({
			cssProcessor: cssnano,
			cssProcessorOptions: options,
			canPrint: false,
		}),
	],
});

exports.setFreeVariable = (key, value) => {
	const env = {};
	env[key] = JSON.stringify(value);

	return {
		plugins: [
			new webpack.DefinePlugin(env),
		],
	};
};

exports.optimizePngs = {
	plugins: [
		new ImageminPlugin({ 
			test: /\.png$/,
		})
	],
};