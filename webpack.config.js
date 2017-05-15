const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const glob = require('glob-all');

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
				template: 'app/index.ejs',
			}),
		],
	},
	parts.lintJavaScript({ include: PATHS.app }),
	parts.lintSCSS({ include: PATHS.app }),
]);

const productionConfig = merge([

	parts.extractCSS({ use: ['css-loader', parts.autoprefix()] }),
	parts.purifyCSS({
		paths: glob.sync([`${PATHS.app}/**/*.js`, `${PATHS.app}/*.ejs`], {nodir: true}),
	}),
]);

const developmentConfig = merge([
	parts.devServer({
		// Customize host/port here if needed
		host: process.env.HOST,
		port: process.env.PORT,
	}),
	parts.loadCSS(),
	parts.loadSCSS(),
]);

module.exports = (env) => {
	if(env === 'production') {
		return merge(commonConfig, productionConfig);
	}
	else {
		return merge(commonConfig, developmentConfig);
	}
};