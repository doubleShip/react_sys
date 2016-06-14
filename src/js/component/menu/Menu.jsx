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

import {List, ListItem} from 'material-ui/List';
///icon
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class Menu extends React.Component {

	render() {
		const { menus } = this.props;
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

				<List>
					{menus.map(data => {
						let childrenItmes = [];
						{data.childMenu.map((childList,v) => {
							let childrenItem = <Link to={childList.menuLink} key={childList.id}><ListItem
								primaryText={childList.menuName}
								leftIcon={<ActionGrade />}
								onTouchTap={this.props.close}
							/></Link>;
							childrenItmes.push(childrenItem);
						})}
						return (
							<ListItem
								primaryText={data.menuName}
								leftIcon={<ActionViewList />}
								initiallyOpen={false}
								key={data.id}
								primaryTogglesNestedList={true}
								nestedItems={childrenItmes}
							/>
						);
					})}
				</List>
			</Drawer>
		);
	}
}
