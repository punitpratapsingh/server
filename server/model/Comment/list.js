import { STATUS_CODES, COMMENT_LIST_API } from '../../constants';
import {
	ApiHitUtility,
} from '../../utility';

/**
 * @description handle the listing of comments
* @author Punit Singh
 * @since 10 Feb, 2021
 */

export default () => new Promise(async (resolve, reject) => {
	try {
		const data = await ApiHitUtility({ endpoint: COMMENT_LIST_API });
		return resolve({ code: STATUS_CODES.SUCCESS, data });
	} catch (err) {
		return reject({ code: STATUS_CODES.EXCEPTION, data: { error: err, message: err.message } });
	}
});
