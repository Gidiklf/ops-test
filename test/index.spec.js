const request = require('request-promise');

process.env.HELLO_PORT = 8866;
const server = require('../dist/index').default;

describe('test app', () => {

	after(() => server.close())	

	it('test app', done => {
		request(`http://localhost:${process.env.HELLO_PORT}`)
		.then(response => {
			if (response != 'Hello World') throw new Error(`Expected response to be Hello World but received ${response}`)
			done();
		})
		.catch(done);
	})
})
