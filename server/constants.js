/**
 * This is the machineTest constant file
* @author Punit Singh
 * @since 10 Feb, 2021
 */

export const {
	NODE_ENV = 'development',
	PAGINATION_LIMIT = 20,
	FILE_SIZE_LIMIT = '3mb',
	API_RATE_LIMIT_TIME = 15, // in minutes
	API_RATE_LIMIT_COUNT = 100,
} = process.env;


export const STATUS_CODES = {
	SUCCESS: 200,
	INVALID_AUTHORIZATION: 401,
	MISSING_RERUIRED_PARAMETERS: 402,
	INVALID_DATA: 403,
	EXCEPTION: 501,
};

export const COMMENT_LIST_API = 'http://jsonplaceholder.typicode.com/comments';
