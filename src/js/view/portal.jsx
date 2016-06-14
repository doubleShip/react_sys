/**
 * Created by yvan on 16/6/13.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Select, DatePick, Input, Button, Title, Table, ReactHighcharts } from './../component';
import { AJAXURL, HCHART_DATE } from './../core/config';

import { requestAsync, appAction } from './../action';

HCHART_DATE.title.text = "用户咨询统计";

class UserAnalyze extends Component {
	constructor(props){
		super(props);

		// es6需要手动绑定this
		this.handleChangeVal       = this.handleChangeVal.bind(this);
		this.handleSubmit          = this.handleSubmit.bind(this);
	}

	/**
	 * 数据提交处理
	 * @param e
	 */
	handleSubmit(e) {
		const { searchSubmitData, dispatch } = this.props;
		dispatch(requestAsync({
			"url" : AJAXURL.portalSearch,
			"data" : searchSubmitData
		},'portalDataSearchList'))
	}

	/**
	 * 设置输入框,下拉框的状态值
	 * @param v
	 */
	handleChangeVal(v,name) {
		this.props.dispatch(appAction.setPortalSearchEleStatus(name,v));
	}

	render() {
		const { menus, searchResponse, dispatch, searchSubmitData } = this.props;
		HCHART_DATE.plotOptions.series.pointStart = 1461513600 * 1000; //设置横坐标
		HCHART_DATE.series[0].name = "pv"; //设置横坐标
		HCHART_DATE.series[1].name = "uv"; //设置横坐标
		HCHART_DATE.series[0].data = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]; //设置横坐标//////
		HCHART_DATE.series[1].data = [33.9, 444.5, 222.4, 111.2, 23.0, 211.0, 33.6, 148.5, 33.4, 45.1, 333.6, 234.4]; //设置横坐标
		return (
			<div className="B_page">
				<Title title="门户咨询统计数据" />
				<div className="B_main">
					<div className="flex-column flex-between flex-md flex-sm">
						<div className="flex-item">
							<DatePick
								value={searchSubmitData.adStartTime}
								title="开始时间"
								stateName="adStartTime"
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item">
							<DatePick
								value={searchSubmitData.adEndTime}
								title="结束时间"
								stateName="adEndTime"
								onChange={this.handleChangeVal }
							/>
						</div>
					</div>
					<br />
					<div className="flex-column flex-md flex-sm">
						<div className="flex-item">
							<Button
								title="查询"
								icon="search"
								onTouchEnd={this.handleSubmit}
							/>
						</div>
					</div>
				</div>
				<Title title="查询结果" />
				<div className="B_main">
					<Table className="table" id="sumTable" data={[{
					"独立用户数UV": searchResponse.sumResult.sumRuc,
					"独立IP访问量": searchResponse.sumResult.sumLuc,
					"页面浏览量PV": searchResponse.sumResult.sumCun,
					"会话数":searchResponse.sumResult.sumCuc,
					"跳出率":searchResponse.sumResult.avgYdRate,
					"平均会话时长":searchResponse.sumResult.avgTdRate,
					"平均每次会话浏览页数": searchResponse.sumResult.avgSdRate
					}]} />
				</div>
				<Title title="报表指标项选择" />
				<div className="B_main">
					<div className="flex-column flex-between flex-md flex-sm">
						<div className="flex-item-6">
							<Select
								value={searchSubmitData.adProject}
								title="指标1"
								stateName="adProject"
								options={menus.adProjectOptions}
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item-1">
							<span className="Portal_between">对比</span>
						</div>
						<div className="flex-item-6">
							<Select
								value={searchSubmitData.adProject}
								title="指标2"
								stateName="adProject"
								options={menus.adProjectOptions}
								onChange={this.handleChangeVal }
							/>
						</div>
					</div>
					<ReactHighcharts config = {HCHART_DATE} />
				</div>
			</div>
		)
	}
}

let mapStateToProps = state => ({
	menus: state.menuRedurce,
	searchSubmitData: state.appState.userAnalyzeSearch, // 查询设置的条件字段值
	searchResponse: state.requestState.userAnalyzeSearchList // 查询返回的结果
});

export default connect(mapStateToProps)(UserAnalyze);