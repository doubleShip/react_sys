/**
 * Created by yvan on 16/6/11.
 */

import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfirmDialog extends Component {
	static propTypes = {
		msg : PropTypes.string,
		onHide : PropTypes.func.isRequired,
		confirm : PropTypes.func.isRequired
	};

	static defaultProps = {
		title : "系统提示"
	};

	render() {

		const actions = [
			<FlatButton
				label="取消"
				primary={true}
				onTouchTap={this.props.onHide}
			/>,
			<FlatButton
				label="确认"
				primary={true}
				onTouchTap={this.props.confirm}
			/>,
		];

		return (
			<div>
				<Dialog
					title={this.props.title}
					actions={actions}
					modal={true}
					open={this.props.show}
				>
					{this.props.msg}
				</Dialog>
			</div>
		);
	}
}