const path = require('path');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	}
};