/**
 * Created by yvan on 16/6/1.
 */
import React from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Menu extends React.Component {

	render() {
		const { setMoudleName } = this.props;
		return (
			<Drawer
				docked={false}
				width={250}
				open={this.props.show}
				onRequestChange={this.props.close}
			>
				<AppBar
					title="菜单"
					iconElementLeft={<IconButton onTouchTap={this.props.close}><NavigationClose /></IconButton>}
				/>
				<MenuItem onTouchTap={this.props.close}><Link to="ad">广告管理</Link></MenuItem>
				<MenuItem onTouchTap={this.props.close}><Link to="pv">流量分析</Link></MenuItem>
				<MenuItem onTouchTap={this.props.close}><Link to="userAnalyze">用户分析</Link></MenuItem>
			</Drawer>
		);
	}
}
