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
		case "REQUEST_INITLIST":
			return Object.assign({}, state, {
				list: action.list.menulist,
				adStatusOptions : action.list.adstatuslist,
				adTypeOptions : action.list.adtypelist,
				socialsoftOptins : action.list.socialsoftlist,
				adProjectOptions : action.list.prolist,
				currentMenu: action.list.menulist[0]['childMenu'][0]['menuName']
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