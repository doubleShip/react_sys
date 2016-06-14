/**
 * Created by yvan on 16/6/1.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import { tableInitialPageLength, tablePageLengthOptions , AJAXURL } from './../core/config';

import { requestAsync, appAction, resetTableData } from './../action';

import { Select, DatePick, Input, Button, DataTable, Title, ButtonIcon, ConfirmDialog } from './../component';
import ModalAddAd from './modal/AddAd';

import { initAppState } from './../reducer/initState';


class Ad extends Component {
	constructor(props){
		super(props);

		// es6需要手动绑定this
		this.handleChangeVal       = this.handleChangeVal.bind(this);
		this.handleSubmit          = this.handleSubmit.bind(this);
		this.tableOperateBtn       = this.tableOperateBtn.bind(this);
		this.setTableTitle         = this.setTableTitle.bind(this);
		this.showEditDialog        = this.showEditDialog.bind(this);
		this.hideAdDialog          = this.hideAdDialog.bind(this);
	}

	/**
	 * 数据提交处理
	 * @param e
	 */
	handleSubmit(e) {
		const { searchSubmitData, dispatch } = this.props;
		dispatch(requestAsync({
			"url" : AJAXURL.adSearch,
			"data" : searchSubmitData
		},'adSearchList'))
	}

	/**
	 * 设置输入框,下拉框的状态值
	 * @param v
	 */
	handleChangeVal(v,name) {
		this.props.dispatch(appAction.setAdSearchEleStatus(name,v));
	}


	/**
	 * 设置table的btn操作
	 * @param val
	 * @param row
	 * @returns {XML}
	 */
	tableOperateBtn(val, row) {
		const { dispatch } = this.props;
		const showAdEdit = this.showEditDialog;
		let confirmMsg = '是否确认删除"'+row.adName+'"这条数据?';
		return (
			<div id="tableOperate">
				<ButtonIcon title="删除" icon="delete" onClick={()=>dispatch(appAction.isShowConfirmDialog(true,confirmMsg,row.adId))} />
				<ButtonIcon title="编辑" icon="edit" onClick={()=>showAdEdit(row)} />
			</div>
		)
	}

	hideAdDialog() {
		const { dispatch } = this.props;
		//隐藏窗口
		// 重置新增窗口数据
		dispatch(appAction.restData('adAdd',initAppState.adAdd));
		dispatch(appAction.isShowAdModal(false));

	}

	/**
	 * 显示编辑窗口
	 * @param data
	 */
	showEditDialog(data) {
		const { dispatch } = this.props;
		// 设置编辑窗口的值
		let newData = {
			adId: parseInt(data.adId),
			adName: data.adName,
			adStatus: parseInt(data.adStatus),
			adProject: parseInt(data.adProject),
			adType: parseInt(data.adType),
			adAddr: data.adAddr,
			adSocialSoftware: parseInt(data.adSocialSoftware),
			adCostBudget: data.adCostBudget,
			adDomain: data.adDomain,
			adStartTime: data.adStartTime,
			adEndTime: data.adEndTime
		};
		dispatch(appAction.restData('adAdd',newData));
		//显示编辑窗口
		dispatch(appAction.isShowAdModal(true));
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
				{ title: '所属项目', prop: 'adProjectText' },
				{ title: '广告类型', prop: 'adTypeText' },
				{ title: '广告地址', prop: 'adAddr' },
				{ title: '投放域名', prop: 'adDomain' },
				{ title: '开始时间', prop: 'adStartTime' },
				{ title: '结束时间', prop: 'adEndTime' },
				{ title: '广告状态', prop: 'adStatusText' },
				{ title: '操作', prop: 'adId', width: 100, render : tableOperate }
			],
			key : [ 'adName', 'adDomain' ],
			initialSortBy : { prop: 'adName', order: 'descending' },
			initialPageLength : tableInitialPageLength,
			pageLengthOptions : tablePageLengthOptions
		}
	}

	/**
	 * 确认删除广告操作
	 * @param v
	 */
	deleteAd(v) {

		const { dispatch, searchResponse } = this.props;
		dispatch(requestAsync({
			"url" : AJAXURL.adDelete,
			"data" : { "adId" : v }
		},'deleteRequest',(a) => {
			//成功后回调隐藏model
			dispatch(appAction.isShowConfirmDialog(false));
			///重置table的数据
			let newData = [];
			searchResponse.map(data=>{
				if(data.adId != v) {
					newData.push(data);
				}
			});
			dispatch(resetTableData('adSearchList',newData));
		}))
	}

	render() {
		const { menus, searchResponse, showAddAdModal, dispatch, confirmDialog, searchSubmitData } = this.props;
		return (
			<div className="B_page">
				<Title title="广告管理" />
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
								title="开始时间起始"
								stateName="adStartTime"
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item-6">
							<DatePick
								value={searchSubmitData.adStartEnd}
								title="开始时间结束"
								stateName="adStartEnd"
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item-6">
							<DatePick
								value={searchSubmitData.adEndTime}
								title="结束时间起始"
								stateName="adEndTime"
								onChange={this.handleChangeVal }
							/>
						</div>
						<div className="flex-item-6">
							<DatePick
								value={searchSubmitData.adEndEnd}
								title="结束时间结束"
								stateName="adEndEnd"
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
							<Button
								title="新建"
								icon="add"
								onTouchEnd={()=>dispatch(appAction.isShowAdModal(true))}
							/>
						</div>
					</div>
					<ModalAddAd
						show={ showAddAdModal }
						onHide={ this.hideAdDialog }
					/>
					<ConfirmDialog
						show = {confirmDialog.show}
						onHide={() => dispatch(appAction.isShowConfirmDialog(false))}
						confirm={() => this.deleteAd(confirmDialog.targetId)}
						msg={confirmDialog.msg}
					/>
				</div>
				<Title title="查询结果" />
				<div className="B_main">
					<DataTable
						initialData={ searchResponse }
						keys={ this.setTableTitle().key }
						columns={ this.setTableTitle().title  }
						initialPageLength={ this.setTableTitle().initialPageLength }
						initialSortBy={ this.setTableTitle().initialSortBy }
						pageLengthOptions={ this.setTableTitle().pageLengthOptions }
					/>
				</div>
			</div>
		);
	}
}

let mapStateToProps = state => ({
	menus: state.menuRedurce, // 菜单和下拉选项的数据
	searchResponse: state.requestState.adSearchList, // 查询返回的结果
	searchSubmitData: state.appState.adSearch, // 查询设置的条件字段值
	showAddAdModal: state.appState.showAddAdModal, // 新增广告框的显示状态
	confirmDialog: state.appState.confirmDialog // 是否显示删除确认框
});

export default connect(mapStateToProps)(Ad);

