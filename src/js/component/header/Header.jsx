/**
 * Created by yvan on 16/5/31.
 */
import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class Header extends Component {

	static propTypes = {
		title : PropTypes.string.isRequired,
		openMenu : PropTypes.func
	};

	static defaultProps = {
	};

	render() {
		return (
			<AppBar
				title={this.props.title}
				onLeftIconButtonTouchTap={this.props.openMenu}
				iconElementRight={
				<IconMenu
					iconButtonElement={
					  <IconButton><MoreVertIcon /></IconButton>
					}
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}
				>
					<MenuItem primaryText="退出" />
				</IconMenu>
				}
			/>
		);
	}
}

export default Header;