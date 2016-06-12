/**
 * Created by yvan on 16/6/10.
 */

import React, { Component, PropTypes } from 'react';
import './_title.scss';

export default class Title extends Component {

	static propTypes = {
		title : PropTypes.string,
		hasUnderLine : PropTypes.bool,
		fontSize : PropTypes.number,
		textAlign : PropTypes.string,
		color : PropTypes.string
	};

	static defaultProps = {
		hasUnderLine : true,
		fontSize : 24,
		textAlign : "left",
		color : "#333"
	};

	render() {
		let underLine = <div className="B_title-underline"></div>;
		if(!this.props.hasUnderLine) {
			underLine = "";
		}
		return (
			<div className="B_title" style={{
				fontSize: this.props.fontSize,
				textAlign: this.props.textAlign,
				color: this.props.color
			}}>
				{this.props.title}
				{underLine}
			</div>
		);
	}
}