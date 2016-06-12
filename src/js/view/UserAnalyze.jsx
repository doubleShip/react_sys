/**
 * Created by yvan on 16/6/5.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Select, DatePick, Input, Button, DataTable, Title, Table } from './../component';
import { tableInitialPageLength, tablePageLengthOptions , AJAXURL } from './../core/config';

import { requestAsync, appAction } from './../action';

class UserAnalyze extends Component {
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
				{ title: '注册用户数', prop: 'registerUser' },
				{ title: '登录用户数', prop: 'loginUserNum' },
				{ title: '消费用户数', prop: 'consumeUserNum' },
				{ title: '用户消费次数', prop: 'consumeUserCount' },
				{ title: '次日留存率', prop: 'nextDayRetention' },
				{ title: '3日留存率', prop: 'thrDaysRetention' },
				{ title: '7日留存率', prop: 'sevenDaysRetention' }
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
			"url" : AJAXURL.userAnalyzeSearch,
			"data" : searchSubmitData
		},'userAnalyzeSearchList'))
	}

	/**
	 * 设置输入框,下拉框的状态值
	 * @param v
	 */
	handleChangeVal(v,name) {
		this.props.dispatch(appAction.setUserAnalyzeSearchEleStatus(name,v));
	}

	render() {
		const { menus, searchResponse, dispatch, searchSubmitData } = this.props;
		return (
			<div>
				<Title title="用户分析" />
				<div className="B_main">
					<div className="flex-column flex-md flex-sm">
						<div className="flex-item">
							<Input
								title="广告名称"
								value={searchSubmitData.adName}
								stateName="adName"
								change={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item">
							<Select
								value={searchSubmitData.adStatus}
								title="广告状态"
								stateName="adStatus"
								options={menus.adStatusOptions}
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item">
							<Select
								value={searchSubmitData.adProject}
								title="所属项目"
								stateName="adProject"
								options={menus.adProjectOptions}
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item">
							<Select
								value={searchSubmitData.adType}
								title="广告类型"
								stateName="adType"
								options={menus.adTypeOptions}
								onChange={this.handleChangeVal }
							/>
						</div>
					</div>

					<div className="flex-column flex-md flex-sm">
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
					"注册用户": searchResponse.sumResult.sumRuc,
					"登录用户数": searchResponse.sumResult.sumLuc,
					"消费用户数": searchResponse.sumResult.sumCun,
					"用户消费次数":searchResponse.sumResult.sumCuc,
					"次日留存率":searchResponse.sumResult.avgYdRate,
					"3日留存率":searchResponse.sumResult.avgTdRate,
					"7日留存率": searchResponse.sumResult.avgSdRate
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
	searchSubmitData: state.appState.userAnalyzeSearch, // 查询设置的条件字段值
	searchResponse: state.requestState.userAnalyzeSearchList // 查询返回的结果
});

export default connect(mapStateToProps)(UserAnalyze);