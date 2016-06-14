/**
 * Created by yvan on 16/5/31.
 */
//导入库和插件
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//导入组件
import { App, Ad, Pv, UserAnalyze, Portal } from './view';

//导入样式
import './../style/main.scss'

//导入状态
import store from './reducer';

const history = syncHistoryWithStore(browserHistory, store);

// 路由配置
let rootInstance = render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Ad} />
				<Route path="ad" component={Ad} />
				<Route path="pv" component={Pv} />
				<Route path="userAnalyze" component={UserAnalyze} />
				<Route path="portal" component={Portal} />
			</Route>
		</Router>
	</Provider>,
    document.getElementById('app')
);

//if (module.hot) {
//	require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
//		getRootInstances: function () {
//			//test
//			// Help React Hot Loader figure out the root component instances on the page:
//			// 帮助 React Hot Loader 识别出页面中的根组件
//			return [rootInstance];
//		}
//	});
//}