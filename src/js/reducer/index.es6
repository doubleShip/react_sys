/**
 * Created by yvan on 16/6/5.
 */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import menuRedurce from './menuRedurce';
import requestState from './request';
import appState from './app';

/**
 * 打印中间件
 * @param store
 */
const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action);
	console.log('next state', store.getState())
	return result
};

let rootReducer = combineReducers({
		menuRedurce,
		requestState,
		appState,
		routing: routerReducer
	});


const store = createStore(
	rootReducer,
	applyMiddleware(thunk,logger)
);


export default store;