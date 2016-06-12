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
		stateName : PropTypes.string
	};

	static defaultProps = {
		disabled : false,
		stateName : ""
	};

	render() {
		return (
			<SelectField
				value={this.props.value}
				onChange={(event, index, value) =>this.props.onChange(value,this.props.stateName)}
				floatingLabelText={this.props.title}
				disabled={this.props.disabled}
				id={this.props.id}
			>
				{this.props.options.map(data => {
					return <MenuItem key={data.dicId} value={data.dicId} primaryText={data.dicValue} />;
				})}
			</SelectField>
		)
	}
}