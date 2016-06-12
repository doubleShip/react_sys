/**
 * Created by yvan on 16/6/6.
 */

import { REQUEST_ING, REQUEST_SUCCESS, REQUEST_FAILD, CLOSE_INFO, RESET_TABLEDATA } from './../action/request';
import {initRequestState} from './initState';

//const rq = (state = {}, action) => {
//	switch (action.type) {
//		case REQUEST_ING:
//			return Object.assign({}, state, {
//				requesting: true,
//				requestFaild: false
//			});
//		case REQUEST_SUCCESS:
//			return Object.assign({}, state, {
//				requesting: false,
//				requestFaild: false,
//				responseData : action.responseData
//			});
//		case REQUEST_FAILD:
//			return Object.assign({}, state, {
//				requestFaild: true,
//				requesting: false
//			});
//		default:
//			return state;
//	}
//};

/**
 * 请求状态设置
 * @param state
 * @param action
 * @returns {*}
 */
const requestState = ( state = initRequestState, action ) => {
	switch (action.type) {
		case REQUEST_ING :
			return Object.assign({}, state, {
				requesting: true,
				requestFaild: false
			});
		case REQUEST_FAILD :
			return Object.assign({}, state, {
				requesting: false,
				requestFaild: true,
				openInfo : {
					status : true,
					info : action.info, // 提示信息
					infoType : action.infoType//提示框类型
				}
			});
		case REQUEST_SUCCESS :
			return Object.assign({}, state, {
				[action.target] : action.responseData,
				requesting: false,
				requestFaild: false,
				openInfo : {
					status : true,
					info : action.info, // 提示信息
					infoType : action.infoType//提示框类型
				}
			});
		case CLOSE_INFO :
			return Object.assign({}, state, {
				openInfo : {
					status : false,
					info : "", // 提示信息
					infoType : "success"//提示框类型
				}
			});
		case RESET_TABLEDATA :
			return Object.assign({}, state, {
				[action.target] : action.data
			});
		default:
			return state;
	}
};

export default requestState;