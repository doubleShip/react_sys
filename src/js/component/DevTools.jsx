/**
 * Created by yvan on 16/6/16.
 */
import React from 'react'

//从redux-devtools中引入createDevTools
import { createDevTools } from 'redux-devtools';

//显示包是单独的，要额外指定
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//创建DevTools组件
const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey='ctrl-h'
				 changePositionKey  ='ctrl-q'>
		<LogMonitor theme='tomorrow' />
	</DockMonitor>
);

export default DevTools


///////
///1.引入当前模块
////import DevTools from './../component/DevTools';
//////////reducer////
//if (module.hot) {
//	middleware = compose(
//		middleware,
//		//applyMiddleware(logger,routerMiddleware(history)),
//		//必须的！启用带有monitors（监视显示）的DevTools
//		DevTools.instrument()
//	)
//}
////////////////
////app页面
///{ module.hot ? <DevTools /> : null }