/**
 * Created by yvan on 16/6/6.
 */
//import fetch from 'isomorphic-fetch';
import { ajax } from './../core/util'

export const REQUEST_ING = 'REQUEST_ING';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILD = 'REQUEST_FAILD';
export const CLOSE_INFO = 'CLOSE_INFO';
export const RESET_TABLEDATA = 'RESET_TABLEDATA';

const RQ = {
	requesting : target => ({
		type: REQUEST_ING,
		target
	}),

	success : (target,data,info,infoType) => ({
		type: REQUEST_SUCCESS,
		target,
		responseData : data,
		info,
		infoType
	}),

	faild : (target,info,infoType) => ({
		type: REQUEST_FAILD,
		target,
		info,
		infoType
	})

};

function requestAsync(params = {},target="",callback = null) {
	return dispatch => {
		dispatch(RQ.requesting(target));
		ajax({
			type:"POST",
			url:params.url,
			dataType:"json",
			data:params.data,
			beforeSend:function(){
			},
			success:function(msg){
				console.log(msg)
				if(msg.status == 1) { //成功
					dispatch(RQ.success(target,msg.data,"操作成功!","success"));//更新状态机
					if(callback) {
						callback(dispatch);//回调
					}
				}
				else { //失败
					let errMsg = msg.message || "操作失败!";
					dispatch(RQ.success(target,[],errMsg,'danger'));//更新状态机
				}

			},
			error:function(e){
				dispatch(RQ.faild(target,"网络请求失败!","danger"));
			}
		})
	};
}

export const closeInfo = () => ({
	type: CLOSE_INFO
});

export const resetTableData = (target,data) => ({
	type: RESET_TABLEDATA,
	target,
	data
});

//const resetData = (target,data) => ({
//	type: RESET_TABLEDATA,
//	target,
//	data
//});
//
//
//export function resetTableData(target,data) {
//	return dispatch => {
//		setTimeout(function(){
//			dispatch(resetData(target,data));
//		},4000)
//	};
//}




// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

//export function fetchPosts(subreddit) {
//
//	// Thunk middleware 知道如何处理函数。
//	// 这里把 dispatch 方法通过参数的形式传给函数，
//	// 以此来让它自己也能 dispatch action。
//
//	return function (dispatch) {
//
//		// 首次 dispatch：更新应用的 state 来通知
//		// API 请求发起了。
//
//		dispatch(requestPosts(subreddit))
//
//		// thunk middleware 调用的函数可以有返回值，
//		// 它会被当作 dispatch 方法的返回值传递。
//
//		// 这个案例中，我们返回一个等待处理的 promise。
//		// 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
//
//		return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
//			.then(response => response.json())
//			.then(json =>
//
//				// 可以多次 dispatch！
//				// 这里，使用 API 请求结果来更新应用的 state。
//
//				dispatch(receivePosts(subreddit, json))
//			);
//
//		// 在实际应用中，还需要
//		// 捕获网络请求的异常。
//	}
//}
export default requestAsync;


