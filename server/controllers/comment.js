/**
 * @description
 * This is the constroller for the vehicles
* @author Punit Singh
 * @since 10 Feb, 2021
 */

import { CommentModel } from '../model';

export default {
	list: (req, res) => {
		CommentModel.List().then(
			success => res.status(success.code).send(success.data),
			error => res.status(error.code).send(error.data),
		);
	},
};
