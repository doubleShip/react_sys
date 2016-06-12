/**
 * Created by yvan on 16/6/5.
 */
import React from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//import { Header, Menu, BrandBar, Loading, Info } from './../component';
import { Header, Menu, Title, Loading, Info } from './../component';

//导入action
import { menuAction, closeInfo } from './../action';

//导入样式
import './../../style/_table.scss';

const muiTheme = getMuiTheme({
	palette: {
		textColor: cyan500
	},
	appBar: {
		height: 50,
	}
});

class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {value: null};
	}


	/**
	 * 组件加载完后初始化
	 */
	componentDidMount() {
		const { dispatch, menus } = this.props;
		// 加载菜单数据
		if(menus.list.length === 0) {
			dispatch(menuAction.getInitList())
		}
	}

	render() {
		const { children, menus, dispatch, isRequesting, openInfo } = this.props;
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Loading show={isRequesting} />
					<Info msg={openInfo.info} show={openInfo.status}  infoType={openInfo.infoType} closeInfo={() => dispatch(closeInfo())} />
					<Header
						title="项目数据管理分析管理系统"
						openMenu={()=>dispatch(menuAction.openMenu(true))}
					/>
					<Menu
						show={ menus.openMenu }
						close={()=>dispatch(menuAction.openMenu(false))}
					/>
					{ children }
				</div>
			</MuiThemeProvider>
		);
	}
};

let mapStateToProps = state => ({
	menus: state.menuRedurce,
	isRequesting: state.requestState.requesting,
	openInfo:state.requestState.openInfo
});

export default connect(mapStateToProps)(App);