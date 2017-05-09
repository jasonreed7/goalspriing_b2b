const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build')
};

const commonConfig =  {
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
};

const productionConfig = () => commonConfig;

const developmentConfig = () => {
	const config = {
		devServer: {
			historyApiFallback: true,
			stats: 'errors-only',
			host: process.env.HOST,
			port: process.env.PORT,
		},
	};

	return Object.assign(
		{},
		commonConfig,
		config
	);
};

module.exports = (env) => {
	if(env === 'production') {
		return productionConfig();
	}
	else {
		return developmentConfig();
	}
}