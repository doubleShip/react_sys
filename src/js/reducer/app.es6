/**
 * Created by yvan on 16/6/8.
 */
import { actionName } from './../action/app';
import {initAppState} from './initState';

/**
 * 设置查询各字段的值
 * @param state
 * @param action
 * @returns {*}
 */
const searchEleSet = (state = {}, action) => {
	switch (action.type) {
		case actionName.SET_ADADD :
		case actionName.SET_ADSEARCH :
		case actionName.SET_PVSEARCH :
		case actionName.SET_USERANALYZESEARCH :
			return Object.assign({}, state, {
				[action.target] : action.value
			});
		default:
			return state;
	}
};

/**
 * 整个应用的状态机设定
 * @param state
 * @param action
 * @returns {*}
 */
const appState = ( state = initAppState, action ) => {
	switch (action.type) {
		case actionName.SET_PVSEARCH :
			return Object.assign({}, state, {
				pvSearch : searchEleSet(state.pvSearch, action)
			});
		case actionName.SET_USERANALYZESEARCH :
			return Object.assign({}, state, {
				userAnalyzeSearch : searchEleSet(state.userAnalyzeSearch, action)
			});
		case actionName.SET_ADSEARCH :
			return Object.assign({}, state, {
				adSearch : searchEleSet(state.adSearch, action)
			});
		case actionName.SET_ADADD :
			return Object.assign({}, state, {
				adAdd : searchEleSet(state.adAdd, action)
			});
		case actionName.SHOW_ADMODAL :
			return Object.assign({}, state, {
				showAddAdModal : action.value
			});
		case actionName.SHOW_CONFIRMMODAL :
			return Object.assign({}, state, {
				confirmDialog : {
					show: action.value,
					msg: action.msg,
					targetId : action.targetId
				}
			});
		case actionName.RESET_DATA :
			return Object.assign({}, state, {
				[action.target] : action.data
			});
		default:
			return state;
	}
};

export default appState;