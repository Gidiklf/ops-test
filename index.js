const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log(`Reply to request from ${req.headers['x-forwarded-for'] || req.ip}`);
	res.send('Hello World');
})

const port = process.env.HELLO_PORT || 80;
app.listen(port, () => console.log(`Example app listening on port ${port}`));

