/**
 * Created by yvan on 16/6/5.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Select, DatePick, Input, Button, DataTable, Title, Table } from './../component';
import { tableInitialPageLength, tablePageLengthOptions , AJAXURL } from './../core/config';

import { requestAsync, appAction } from './../action';

class Pv extends Component {
	constructor(props){
		super(props);

		// es6需要手动绑定this
		this.handleChangeVal       = this.handleChangeVal.bind(this);
		this.handleSubmit          = this.handleSubmit.bind(this);
		this.setTableTitle         = this.setTableTitle.bind(this);
	}

	/**
	 * 设置表头
	 * @returns {{title: *[], key: string[], initialSortBy: {prop: string, order: string}, initialPageLength, pageLengthOptions}}
	 */
	setTableTitle() {
		let tableOperate = this.tableOperateBtn;
		return {
			title : [
				{ title: '广告名称', prop: 'adName' },
				{ title: '广告域名', prop: 'adDomain' },
				{ title: '广告开始时间', prop: 'adStartTime' },
				{ title: '所属项目', prop: 'adProjectText' },
				{ title: '点击量', prop: 'clickNum' },
				{ title: '独立访问用户', prop: 'userViewNum' },
				{ title: '独立IP访问量', prop: 'ipViewNum' },
				{ title: '会话数', prop: 'sessionNum' },
				{ title: '平均会话浏览页', prop: 'avgSessionViewNum' },
				{ title: '平均会话时常', prop: 'avgSessionDuration' },
				{ title: '跳出率百分比', prop: 'bounceRate' }
			],
			key : [ 'adName', 'adDomain' ],
			initialSortBy : { prop: 'adName', order: 'descending' },
			initialPageLength : tableInitialPageLength,
			pageLengthOptions : tablePageLengthOptions
		}
	}

	/**
	 * 数据提交处理
	 * @param e
	 */
	handleSubmit(e) {
		const { searchSubmitData, dispatch } = this.props;
		dispatch(requestAsync({
			"url" : AJAXURL.pvSearch,
			"data" : searchSubmitData
		},'pvSearchList'))
	}

	/**
	 * 设置输入框,下拉框的状态值
	 * @param v
	 */
	handleChangeVal(v,name) {
		this.props.dispatch(appAction.setPvSearchEleStatus(name,v));
	}

	render() {
		const { menus, searchResponse, dispatch, searchSubmitData } = this.props;
		return (
			<div className="B_page">
				<Title title="流量分析" />
				<div className="B_main">
					<div className="flex-column flex-between flex-md flex-sm">
						<div className="flex-item-6">
							<Input
								title="广告名称"
								value={searchSubmitData.adName}
								stateName="adName"
								change={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item-6">
							<Select
								value={searchSubmitData.adStatus}
								title="广告状态"
								stateName="adStatus"
								options={menus.adStatusOptions}
								onChange={this.handleChangeVal }
								optionValue="dicValue"
								optionKey="dicId"
							/>
						</div>
						<div className="flex-item-6">
							<Select
								value={searchSubmitData.adProject}
								title="所属项目"
								stateName="adProject"
								options={menus.adProjectOptions}
								onChange={this.handleChangeVal }
								optionValue="dicValue"
								optionKey="dicId"
							/>
						</div>
						<div className="flex-item-6">
							<Select
								value={searchSubmitData.adType}
								title="广告类型"
								stateName="adType"
								options={menus.adTypeOptions}
								onChange={this.handleChangeVal }
								optionValue="dicValue"
								optionKey="dicId"
							/>
						</div>
						<div className="flex-item-6">
							<DatePick
								value={searchSubmitData.adStartTime}
								title="开始时间"
								stateName="adStartTime"
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item-6">
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
				<Title title="合计数值"
					   hasUnderLine={false}
					   fontSize={16}
					   textAlign="center"
					   color="#bbb"
				/>
				<div className="B_main">
					<Table className="table" id="sumTable" data={[{
					"独立访问用户": searchResponse.sumResult.sumUv,
					"点击量": searchResponse.sumResult.sumPv,
					"独立IP访问量": searchResponse.sumResult.sumIpStats,
					"会话数":searchResponse.sumResult.sumSessionStat,
					"平均会话浏览页":searchResponse.sumResult.avgReqPages,
					"平均会话时长":searchResponse.sumResult.avgSessionTime,
					"跳出率百分比": searchResponse.sumResult.bounceRate
					}]} />
					<br />
					<DataTable
						initialData={ searchResponse.hitResult }
						keys={ this.setTableTitle().key }
						columns={ this.setTableTitle().title  }
						initialPageLength={ this.setTableTitle().initialPageLength }
						initialSortBy={ this.setTableTitle().initialSortBy }
						pageLengthOptions={ this.setTableTitle().pageLengthOptions }
					/>
				</div>
			</div>
		)
	}
}

let mapStateToProps = state => ({
	menus: state.menuRedurce,
	searchSubmitData: state.appState.pvSearch, // 查询设置的条件字段值
	searchResponse: state.requestState.pvSearchList // 查询返回的结果
});

export default connect(mapStateToProps)(Pv);