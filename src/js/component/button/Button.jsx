/**
 * Created by yvan on 16/6/10.
 */
import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './_button.scss';
const style = {
	margin: 12
};

export default class Button extends React.Component {
	static propTypes = {
		title : PropTypes.string.isRequired,
		onTouchStart : PropTypes.func,
		onTouchEnd : PropTypes.func,
		onMouseUp : PropTypes.func,
		icon : PropTypes.node,
		linkButton : PropTypes.bool,
		href : PropTypes.string,
		className : PropTypes.string,
		disabled : PropTypes.bool
	};

	static defaultProps = {
		linkButton : false,
		disabled : false
	};
	render() {
		let icon = "";
		switch(this.props.icon) {
			case "search" :
				icon = <ActionSearch />;
				break;
			case "add" :
				icon = <ContentAdd />;
				break;
			default :
				icon = "";
		}
		return (
			<RaisedButton
				label={this.props.title}
				primary={true}
				style={style}
				linkButton={this.props.linkButton}
				href={this.props.href}
				className={this.props.className}
				disabled={this.props.disabled}
				icon={icon}
				onTouchStart={this.props.onTouchStart}
				onTouchEnd={this.props.onTouchEnd}
				onMouseUp={()=>this.props.onTouchEnd()}
			/>
		)
	}
}