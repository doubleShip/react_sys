/**
 * Created by yvan on 16/6/12.
 */

import moment from 'moment';

export const initAppState = {
	adSearch : {
		adName: '',
		adStatus:'',
		adProject:'',
		adType: '',
		adStartTime:moment().format('YYYY-MM-DD'),
		adStartEnd:moment().format('YYYY-MM-DD'),
		adEndTime:moment().format('YYYY-MM-DD'),
		adEndEnd:moment().format('YYYY-MM-DD')
	},	// 广告查询字段
	showAddAdModal : false, //是否显示显示新增广告的摸态框
	confirmDialog : {
		show: false,
		msg: "",
		targetId : null
	}, // 是否显示删除 确认摸态框
	adAdd : {
		adId: '',
		adName: '',
		adStatus:'',
		adProject:'',
		adType: '',
		adAddr: '',
		adSocialSoftware: '',
		adCostBudget: '',
		adDomain: '',
		adStartTime:moment().format('YYYY-MM-DD'),
		adEndTime:moment().format('YYYY-MM-DD')
	},	// 广告新增字段
	pvSearch : {
		adName: '',
		adStatus:'',
		adProject:'',
		adType: '',
		adStartTime:moment().format('YYYY-MM-DD'),
		adEndTime:moment().format('YYYY-MM-DD')
	}, // 流量分析查询字段
	userAnalyzeSearch : {
		adName: '',
		adStatus:'',
		adProject:'',
		adType: '',
		adStartTime:moment().format('YYYY-MM-DD'),
		adEndTime:moment().format('YYYY-MM-DD')
	}, // 用户分析查询字段
	portalDataSearch : {
		adStartTime:moment().format('YYYY-MM-DD'),
		adEndTime:moment().format('YYYY-MM-DD')
	}, //门户数据查询字段
	reportDataSearch : [], //数据渠道报表查询
	reportProjectSearch : [] //项目数据报表查询
};

export const initRequestState = {
	openInfo: {
		status : false,
		info : "", // 提示信息
		infoType : "success"//提示框类型
	},//显示成功失败提示框
	requesting : false,
	requestFaild : false,
	adSearchList : [], // 广告查询结果
	deleteRequest : [], // 各种删除请求
	adAddRequest : [], // 广告新增结果
	pvSearchList : {
		hitResult : [], // 流量分析查询结果
		sumResult : {
			avgReqPages:"0", //平均会话浏览页
			avgSessionTime: "0", //平均会话时长
			bounceRate:"0",
			sumBounceSessionCount:"0",
			sumExitSessionCount:"0",
			sumIpStats:"0", //独立IP访问量
			sumPv:"0",// 点击量
			sumSessionStat:"0", //会话数
			sumUv:"0" //独立访问用户
		} //总计
	},
	userAnalyzeSearchList : {
		hitResult : [], // 流量分析查询结果
		sumResult : {
			sumLuc:"0", //登录用户数
			sumRuc: "0", //注册用户数
			sumCun:"0", //消费用户数
			sumCuc:"0", //用户消费次数
			avgSdRate:"0", //7日;
			avgTdRate:"0", //3日
			avgYdRate:"0"// 次日
		} //总计
	}, // 用户分析查询结果
	portalDataSearchList : [], //门户数据查询结果
	reportDataSearchList : [], //数据渠道报表查询结果
	reportProjectSearchList : []//项目数据报表查询结果
};