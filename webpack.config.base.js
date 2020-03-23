const path = require('path');

module.exports = {
	resolve: {
		symlinks: false,

		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/App'),
		],
		alias: {
			'@': path.resolve(__dirname, 'src/App'),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, 'config'),
					path.resolve(__dirname, 'lib'),
					path.resolve(__dirname, 'utils'),
					path.resolve(__dirname, 'src')
				],
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'postcss-loader' }
				]
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' }, // creates style nodes from JS strings
					{ loader: 'css-loader', options: { importLoaders: 1 } }, // translates CSS into CommonJS
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' } // compiles Sass to CSS
				]
			},
			{
				test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|svg|otf|ttf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 5000000,
							name: '[path][name].[ext]?[hash]',
							outputPath: 'assets',
							publicPath: '/assets/'
						}
					}
				]
			}
		]
	}
};