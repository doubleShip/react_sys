/**
 * Created by yvan on 16/6/11.
 */
import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionDelete from 'material-ui/svg-icons/action/delete-forever';
import ActionEditor from 'material-ui/svg-icons/editor/mode-edit';
import ActionAdd from 'material-ui/svg-icons/content/add';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class ButtonIcon extends React.Component {
	static propTypes = {
		title : PropTypes.string.isRequired,
		icon : PropTypes.string,
		disabled : PropTypes.bool,
		tooltipPosition : PropTypes.string
	};

	static defaultProps = {
		disabled : false,
		tooltipPosition : "top-center"
	};

	render() {
		let icon = "";
		const iconName = this.props.icon;
		switch (this.props.icon) {
			case 'delete' :
				icon = <ActionDelete />;
				break;
			case 'add' :
				icon = <ActionAdd />;
				break;
			case 'edit' :
				icon = <ActionEditor />;
				break;
			case 'search' :
				icon = <ActionSearch />;
				break;
			default :
				icon = <ActionHome />
		}
		return (
			<span onClick={this.props.onClick}>
				<IconButton
					tooltip={this.props.title}
					tooltipPosition={this.props.tooltipPosition}
					disabled={this.props.disabled}
				>
					{icon}
				</IconButton>
			</span>
		)
	}
}