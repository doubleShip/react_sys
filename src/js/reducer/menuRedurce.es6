/**
 * Created by yvan on 16/6/5.
 */

const menuRedurce = (state = {
	openMenu : false,
	currentMenu : "广告管理",
	adStatusOptions : [],
	adProjectOptions : [],
	adTypeOptions : [],
	socialsoftOptins : [],
	list : []
}, action) => {
	switch (action.type) {
		case "SET_OPENKEY":
			return Object.assign({}, state, {
				openKeys: action.openKeys
			});
			//return fromJS(state).setIn(['openKeys'], action.openKeys).toJS();
		case "REQUEST_INITLIST":
			return Object.assign({}, state, {
				list: action.list.menulist,
				adStatusOptions : action.list.adstatuslist,
				adTypeOptions : action.list.adtypelist,
				socialsoftOptins : action.list.socialsoftlist,
				adProjectOptions : action.list.prolist,
				currentMenu: action.list.menulist[0]['childMenu'][0]['menuName']
			});
		case "SET_CURRENTMENU":
			return Object.assign({}, state, {
				currentMenu: action.currentMenu
			});
		case "OPEN_MENU" :
			return Object.assign({}, state, {
				openMenu: action.value
			});
		default:
			return state;
	}
};

export default menuRedurce;