const express = require('express');
const path = require('path');

const wdm = require('webpack-dev-middleware');
const whm = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const compiler = require('webpack')(webpackConfig);

const app = express();

app.use(wdm(compiler, {
	publicPath: webpackConfig.output.publicPath,
}));

app.use(whm(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(3000, e => {
	if (e) throw e;
	console.log('Server started at port 3000');
});