import request from 'request';

/**
 * @description this utility will hit a given GET endpoint and return the data.
* @author Punit Singh
 * @since 10 Feb, 2021
 * @param {String} endpoint
 */

export default ({ endpoint = 'http://jsonplaceholder.typicode.com/comments' }) => new Promise(async (resolve, reject) => {
	if (!endpoint) {
		return reject({ message: 'Missing required endpoint.' });
	}
	request.get(`${endpoint}`, (err, response, body) => {
		if (err) {
			return reject(err);
		}
		if (response.statusCode === 200) {
			const queryResponse = JSON.parse(response.body);
			return resolve({ data: queryResponse });
		}
		return reject({ message: 'Invalid Endpount' });
	});
});
