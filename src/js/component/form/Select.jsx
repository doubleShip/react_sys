/**
 * Created by yvan on 16/6/10.
 */

import React, {PropTypes} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Select extends React.Component {
	static propTypes =  {
		value : PropTypes.any,
		onChange : PropTypes.func,
		title : PropTypes.string,
		options : PropTypes.array,
		disabled : PropTypes.bool,
		id : PropTypes.string,
		stateName : PropTypes.string,
		optionKey : PropTypes.string,
		optionValue : PropTypes.string,
		errorText : PropTypes.string
	};

	static defaultProps = {
		disabled : false,
		stateName : "",
		optionKey : "key",
		optionValue : "value"
	};

	render() {
		const { optionKey, optionValue, reg } = this.props;
		let re = new RegExp(reg);
		let errMsg="";
		if(!re.test(this.props.value)) errMsg = this.props.errorText;
		return (
			<SelectField
				value={this.props.value}
				onChange={(event, index, value) =>this.props.onChange(value,this.props.stateName)}
				floatingLabelText={this.props.title}
				disabled={this.props.disabled}
				id={this.props.id}
				errorText={errMsg}
			>
				{this.props.options.map(data => {
					return <MenuItem key={data[optionKey]} value={data[optionKey]} primaryText={data[optionValue]} />;
				})}
			</SelectField>
		)
	}
}