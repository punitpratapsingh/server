/**
 * This is the route handler
 * @description
* @author Punit Singh
 * @since 10 Feb, 2021
 */

import {
	CommentControllers,
} from '../controllers';

const prefix = '/api/comment/';

export default (app) => {
	app.get(`${prefix}list`, CommentControllers.list);
};
