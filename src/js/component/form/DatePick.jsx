/**
 * Created by yvan on 16/6/10.
 */

import React, {PropTypes} from 'react';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};

export default class DatePick extends React.Component {
	static propTypes =  {
		value : PropTypes.any,
		onChange : PropTypes.func,
		title : PropTypes.string,
		minDate : PropTypes.object,
		maxDate : PropTypes.object,
		disabled : PropTypes.bool,
		formatDate : PropTypes.func,
		defaultDate : PropTypes.any,
		id : PropTypes.string,
		stateName : PropTypes.string,
		autoOk : PropTypes.bool,
		mode : PropTypes.string
	};

	static defaultProps = {
		disabled : false,
		autoOk : true,
		stateName : "",
		mode : "landscape"
	};

	render() {
		return (
			<DatePicker
				floatingLabelText={this.props.title}
				value={new Date(this.props.value)}
				autoOk={this.props.autoOk}
				mode={this.props.mode}
				onChange={(e,v)=>this.props.onChange(v.Format("yyyy-MM-dd"),this.props.stateName)}
			/>
		)
	}
}