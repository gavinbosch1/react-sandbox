const express = require('express');
const path = require('path');

const app = express();

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(3000, e => {
	if (e) throw e;
	console.log('Server started at port 3000');
});