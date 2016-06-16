/**
 * Created by yvan on 16/6/16.
 */

/**
 * 打印中间件
 * @param store
 */
export const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action);
	console.log('next state', store.getState())
	return result
};