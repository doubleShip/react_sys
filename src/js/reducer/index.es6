/**
 * Created by yvan on 16/6/5.
 */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import menuRedurce from './menuRedurce';
import requestState from './request';
import appState from './app';

/**
 * 所有中间件
 */
let middleware = applyMiddleware(thunk);

/**
 * 所有reducer
 */
let rootReducer = combineReducers({
		menuRedurce,
		requestState,
		appState,
		routing: routerReducer
	});

//debug
if (module.hot) {
	const devToolsExtension = window.devToolsExtension

	if (typeof devToolsExtension === 'function') {
		middleware = compose(middleware, devToolsExtension())
	}
}

const store = createStore(
	rootReducer,
	middleware
);

export default store;