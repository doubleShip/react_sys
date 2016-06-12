/**
 * Created by yvan on 16/6/10.
 */

import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

export default class DatePick extends React.Component {
	static propTypes =  {
		value : PropTypes.any,
		onChange : PropTypes.func,
		title : PropTypes.string,
		disabled : PropTypes.bool,
		id : PropTypes.string,
		stateName : PropTypes.string
	};

	static defaultProps = {
		disabled : false,
		value : "",
		stateName : ""
	};

	render() {
		return (
			<TextField
				floatingLabelText={this.props.title}
				value={this.props.value}
				onChange={e => this.props.change(e.target.value,this.props.stateName)}
				id={this.props.id}
				disabled={this.props.disabled}
			/>
		)
	}
}