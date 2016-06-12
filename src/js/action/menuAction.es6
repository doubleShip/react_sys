/**
 * Created by yvan on 16/6/5.
 */

const menuAction = {
	getInitList : () => ({
		type : "REQUEST_INITLIST",
		list : {
			prolist: [
				{
					dicId: 0,
					dicKey: "all",
					dicValue: "全部",
					indexType: null
				},
				{
					dicId: 5,
					dicKey: "adProject",
					dicValue: "AP游戏项目",
					indexType: null
				},
				{
					dicId: 7,
					dicKey: "adProject",
					dicValue: "AP门户",
					indexType: null
				},
				{
					dicId: 8,
					dicKey: "adProject",
					dicValue: "AP资讯",
					indexType: null
				},
				{
					dicId: 9,
					dicKey: "adProject",
					dicValue: "L项目",
					indexType: null
				}
			],
			socialsoftlist: [
				{
					dicId: 0,
					dicKey: "all",
					dicValue: "全部",
					indexType: null
				},
				{
					dicId: 14,
					dicKey: "socialSoft",
					dicValue: "微信",
					indexType: null
				},
				{
					dicId: 15,
					dicKey: "socialSoft",
					dicValue: "QQ",
					indexType: null
				},
				{
					dicId: 16,
					dicKey: "socialSoft",
					dicValue: "其它",
					indexType: null
				},
				{
					dicId: 17,
					dicKey: "socialSoft",
					dicValue: "陌陌",
					indexType: null
				},
				{
					dicId: 18,
					dicKey: "socialSoft",
					dicValue: "不区分",
					indexType: null
				}
			],
			menulist:[
				{
					"id" : 1,
					"menuName" : "广告管理",
					"parentId" : 0,
					"menuLink" : "",
					"childMenu" : [{
						"id" : 13,
						"menuName" : "广告管理",
						"parentId" : 1,
						"menuLink" : "/ad"
					}]
				},
				{
					"id" : 2,
					"menuName" : "广告数据分析",
					"parentId" : 0,
					"menuLink" : "www.analysis.com",
					"childMenu" : [{
						"id" : 3,
						"menuName" : "流量分析",
						"parentId" : 2,
						"menuLink" : "/pv"
					}, {
						"id" : 5,
						"menuName" : "用户分析",
						"parentId" : 2,
						"menuLink" : "/userAnalyze"
					}]
				},
				{
					"id" : 6,
					"menuName" : "项目数据查询",
					"parentId" : 0,
					"menuLink" : "",
					"childMenu" : [{
						"id" : 7,
						"menuName" : "门户数据咨询",
						"parentId" : 6,
						"menuLink" : "/portal"
					}]
				},
				{
					"id" : 10,
					"menuName" : "统计报表",
					"parentId" : 0,
					"menuLink" : "",
					"childMenu" : [{
						"id" : 11,
						"menuName" : "数据渠道分析",
						"parentId" : 10,
						"menuLink" : "/dataAnalyze"
					}, {
						"id" : 12,
						"menuName" : "项目数据统计",
						"parentId" : 10,
						"menuLink" : "/projectdataAnalyze"
					}]
				}
			],
			adstatuslist: [
				{
					dicId: 0,
					dicKey: "all",
					dicValue: "全部",
					indexType: null
				},
				{
					dicId: 1,
					dicKey: "adStatus",
					dicValue: "过期",
					indexType: null
				},
				{
					dicId: 2,
					dicKey: "adStatus",
					dicValue: "投放中",
					indexType: null
				},
				{
					dicId: 3,
					dicKey: "adStatus",
					dicValue: "新建",
					indexType: null
				},
				{
					dicId: 4,
					dicKey: "adStatus",
					dicValue: "即将到期",
					indexType: null
				}
			],
			indextypelist: [
				{
					dicId: 0,
					dicKey: "all",
					dicValue: "全部",
					indexType: null
				},
				{
					dicId: 19,
					dicKey: "indexType",
					dicValue: "新增注册用户",
					indexType: null
				},
				{
					dicId: 20,
					dicKey: "indexType",
					dicValue: "登录用户数",
					indexType: null
				},
				{
					dicId: 21,
					dicKey: "indexType",
					dicValue: "用户消费金额",
					indexType: null
				},
				{
					dicId: 22,
					dicKey: "indexType",
					dicValue: "独立IP访问量",
					indexType: null
				},
				{
					dicId: 23,
					dicKey: "indexType",
					dicValue: "会话数",
					indexType: null
				}
			],
			adtypelist: [
				{
					dicId: 0,
					dicKey: "all",
					dicValue: "全部",
					indexType: null
				},
				{
					dicId: 10,
					dicKey: "adType",
					dicValue: "外部推广",
					indexType: null
				},
				{
					dicId: 11,
					dicKey: "adType",
					dicValue: "公司内部",
					indexType: null
				},
				{
					dicId: 12,
					dicKey: "adType",
					dicValue: "其它类型",
					indexType: null
				},
				{
					dicId: 13,
					dicKey: "adType",
					dicValue: "社交推广",
					indexType: null
				}
			]
		}


	}),
	setCurrentMoudle : currentMenu => ({
		type : "SET_CURRENTMENU",
		currentMenu
	}),

	openMenu : value => ({
		type : "OPEN_MENU",
		value
	})
	//fetchPosts : () => {
	//	return dispatch => {
	//		dispatch(requestPosts(reddit))
	//		return fetch(`https://www.reddit.com/r/${reddit}.json`)
	//			.then(response => response.json())
	//			.then(json => dispatch(receivePosts(reddit, json)))
	//	}
	//}
};

export default menuAction;