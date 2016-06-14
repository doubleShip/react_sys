/**
 * Created by yvan on 16/6/10.
 */

import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

export default class DatePick extends React.Component {
	// 构造
constructor(props) {
super(props);
// 初始状态
this.state = {};
this.checkAndSet = this.checkAndSet.bind(this);
}
	static propTypes =  {
		value : PropTypes.any,
		onChange : PropTypes.func,
		title : PropTypes.string,
		disabled : PropTypes.bool,
		id : PropTypes.string,
		stateName : PropTypes.string,
		errorText : PropTypes.string
	};

	static defaultProps = {
		disabled : false,
		value : "",
		stateName : ""
	};

	checkAndSet() {

	}
	render() {
		let re = new RegExp(this.props.reg);
		let errMsg="";
		if(!re.test(this.props.value)) errMsg = this.props.errorText;
		return (
			<TextField
				floatingLabelText={this.props.title}
				value={this.props.value}
				onChange={e => this.props.change(e.target.value,this.props.stateName)}
				id={this.props.id}
				disabled={this.props.disabled}
				errorText={errMsg}
			/>
		)
	}
}