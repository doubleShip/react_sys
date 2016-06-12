/**
 * Created by yvan on 16/6/5.
 */

export const actionName  = {
	SET_ADSEARCH : "SET_ADSEARCH",
	SET_ADADD    : "SET_ADADD",
	SHOW_ADMODAL : "SHOW_ADMODAL",
	SHOW_CONFIRMMODAL : "SHOW_CONFIRMMODAL",
	RESET_DATA : "RESET_DATA",
	SET_PVSEARCH : "SET_PVSEARCH",
	SET_USERANALYZESEARCH : "SET_USERANALYZESEARCH"
};

const appAction = {
	// 设置广告搜索字段的值
	setAdSearchEleStatus : (eleName,value) => ({
		type : actionName.SET_ADSEARCH,
		target : eleName,
		value
	}),
	// 设置PV搜索字段的值
	setPvSearchEleStatus : (eleName,value) => ({
		type : actionName.SET_PVSEARCH,
		target : eleName,
		value
	}),
	//设置用户分析
	setUserAnalyzeSearchEleStatus : (eleName,value) => ({
		type : actionName.SET_USERANALYZESEARCH,
		target : eleName,
		value
	}),
	// 设置广告新增字段的值
	setAdAddEleStatus : (eleName,value) => ({
		type : actionName.SET_ADADD,
		target : eleName,
		value
	}),
	// 是否显示新增广告摸态框
	isShowAdModal : value => ({
		type : actionName.SHOW_ADMODAL,
		value
	}),
	// 是否显示警告示框
	isShowConfirmDialog : (value,msg,id) => ({
		type : actionName.SHOW_CONFIRMMODAL,
		value,
		msg,
		targetId: id
	}),
	//重置数据
	restData : (target,data) => ({
		type : actionName.RESET_DATA,
		target,
		data
	})
};

export default appAction;