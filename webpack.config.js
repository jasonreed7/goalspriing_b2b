const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const glob = require('glob-all');

const webpack = require('webpack');

const parts = require('./webpack.parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const commonConfig =  merge([
	{
		entry: {
			app: path.join(PATHS.app, 'js'),
		},
		output: {
			path: PATHS.build,
			filename: '[name].js',
		},
		plugins: [
			new HTMLWebpackPlugin({
				title: 'Goalspriing',
				template: '!!html-loader!app/index.ejs',
			}),
		],
	},
	parts.lintJavaScript({ include: PATHS.app }),
	parts.lintSCSS({ include: PATHS.app }),
	parts.loadJavaScript({ include: PATHS.app }),
	parts.loadSVG(),
	// parts.loadHTML({ include: PATHS.app }),
]);

const productionConfig = merge([

	{
		output: {
			chunkFilename: '[name].[chunkhash].js',
			filename: '[name].[chunkhash].js',
		},
		plugins: [
			new webpack.HashedModuleIdsPlugin(),
		],
	},
	parts.clean(PATHS.build),
	parts.minifyJavaScript(),
	parts.minifyCSS({
		options: {
			discardComments: {
				removeAll: true,
			},
			// Run cssnano in safe mode to avoid
			// potentially unsafe transformations.
			safe: true,
		},
	}),
	parts.generateSourceMaps({ type: 'source-map' }),
	parts.extractCSS({ use: ['css-loader', parts.autoprefix()] }),
	// parts.purifyCSS({
	// 	paths: glob.sync([`${PATHS.app}/**/*.js`, `${PATHS.app}/*.ejs`], {nodir: true}),
	// }),
	parts.loadImages({
		options: {
			limit: 15000,
			name: './images/[name].[hash].[ext]',
		},
	}),
	parts.loadFonts({
		options: {
			limit: 50000,
			name: './fonts/[name].[hash].[ext]',
		},
	}),
	parts.attachRevision(),
	parts.setFreeVariable(
		'process.env.NODE_ENV',
		'production'
	),
]);

const developmentConfig = merge([
	{
		output: {
			devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
		},
	},
	parts.generateSourceMaps({ type: 'cheap-module-source-map' }),
	parts.devServer({
		// Customize host/port here if needed
		host: process.env.HOST,
		port: process.env.PORT,
	}),
	parts.loadCSS(),
	parts.loadSCSS(),
	parts.loadImages(),
	parts.loadFonts(),
]);

module.exports = (env) => {
	if(env === 'production') {
		return merge(commonConfig, productionConfig);
	}
	else {
		return merge(commonConfig, developmentConfig);
	}
};