/**
 * Created by yvan on 16/6/9.
 */
import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

const styles = {
	danger: {
		backgroundColor: "#FF5722"
	},
	success: {
		backgroundColor: "#00E676"
	}
};
export default class Info extends React.Component {
	static propTypes = {
		msg : PropTypes.string.isRequired,
		closeInfo : PropTypes.func.isRequired,
		closeTime : PropTypes.number
	};

	static defaultProps = {
		infoType : "success",
		closeTime : 3000
	};

	// 构造
	constructor(props) {
		super(props);
	}

	//关闭提示框

	render() {
		const {closeTime, infoType, msg, closeInfo, show} = this.props;
		let infoStyle = styles[infoType];
		return (
			<Snackbar
				open={show}
				message={msg}
				autoHideDuration={closeTime}
				onRequestClose={closeInfo}
				bodyStyle={infoStyle}
			/>
		);
	}
}