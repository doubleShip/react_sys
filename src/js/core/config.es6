/**
 * Created by yvan on 16/6/2.
 */

export const tableInitialPageLength = 5;
export const tablePageLengthOptions = [5 , 10 , 50];// table的一页显示的条数选项


// ajax请求接口
export const AJAXURL = {
	adSearch : "http://10.72.3.27:8080/tsied_rebuilt/ad/getdata",	//查询广告
	adAdd    : "http://10.72.3.27:8080/tsied_rebuilt/ad/addormodify", //新增和编辑广告
	adDelete : "http://10.72.3.27:8080/tsied_rebuilt/ad/del", //删除广告
	pvSearch : "http://10.72.3.27:8080/tsied_rebuilt/flow", //查询pv
	userAnalyzeSearch : "http://10.72.3.27:8080/tsied_rebuilt/user", //查询用户分析
	portalSearch : "http://10.72.3.27:8080/tsied_rebuilt/user" //查询门户数据
};

// 横坐标跟日期有关的图标配置
export let HCHART_DATE = {
	title: {
		text: ''
	},
	yAxis: {
		title: {
			text: ''
		},
		min: 0,
		labels: {
			formatter:function(){
				if(this.value <= 100) {
					return this.value;
				}else if(this.value > 100 && this.value <= 200) {
					return this.value;
				}else {
					return this.value;
				}
			}
		}
	},
	xAxis: {
		type:"datetime",
		maxPadding : 0.033,
		minPadding : 0.033,
		lineWidth :0.5,
		tickInterval : 24 * 3600 * 1000 * 1,
		dateTimeLabelFormats:{
			day: '%e日'
		}
	},
	credits: {
		text: '内部使用',
		href: ''
	},
	plotOptions: {
		series: {
			pointStart: 1000,
			pointInterval: 24 * 3600 * 1000 * 1
		}
	},
	tooltip: {
		crosshairs: true,
		shared: true,
		valueSuffix: '',
		xDateFormat: '%Y-%m-%d',
		style: {
			color: "#000"
		}
	},
	series: [
		{
			name: "",
			data: [],
			zIndex: 1,
			marker: {
				fillColor: 'white',
				lineWidth: 2,
				lineColor: "#7cb5ec"
			}
		},{
			name: "",
			data: [],
			zIndex: 1,
			marker: {
				fillColor: 'white',
				lineWidth: 2,
				lineColor: "red"
			}
		}
	]
}