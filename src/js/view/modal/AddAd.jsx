/**
 * Created by yvan on 16/6/1.
 */
import React from 'react';
import { connect } from 'react-redux';

import { AJAXURL } from './../../core/config';

import { requestAsync, appAction } from './../../action';
import { Select, DatePick, Input, Button, Dialog, ButtonFlat } from './../../component';
import { initAppState } from './../../reducer/initState';

class ModalAddAd extends React.Component {
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
		const { addSubmitData, dispatch, onHide } = this.props;
		dispatch(requestAsync({
			"url" : AJAXURL.adAdd,
			"data" : addSubmitData
		},'adAddRequest',() => {
			onHide(); //成功后回调隐藏model
			// 重置新增窗口数据
			dispatch(appAction.restData('adAdd',initAppState.adAdd));
		}))
	}

	/**
	 * 设置输入框,下拉框的状态值
	 * @param v
	 */
	handleChangeVal(v,name) {
		this.props.dispatch(appAction.setAdAddEleStatus(name,v));
	}

	render() {
		const actions = [
			<ButtonFlat
				label="取消"
				primary={true}
				onTouchTap={this.props.onHide}
			/>,
			<ButtonFlat
				label="提交"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleSubmit}
			/>
		];

		const { menus, operateResult, addSubmitData } = this.props;

		return (
			<Dialog
				title="新建广告"
				actions={actions}
				modal={true}
				open={this.props.show}
				onRequestClose={this.props.onHide}
				autoScrollBodyContent={true}
			>
				<div className="flex-column flex-md flex-sm">
					<div className="flex-item">
						<Input
							title="广告名称"
							value={addSubmitData.adName}
							stateName="adName"
							change={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<Select
							value={addSubmitData.adStatus}
							title="广告状态"
							stateName="adStatus"
							options={menus.adStatusOptions}
							onChange={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<Select
							value={addSubmitData.adProject}
							title="所属项目"
							stateName="adProject"
							options={menus.adProjectOptions}
							onChange={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<Select
							value={addSubmitData.adType}
							title="广告类型"
							stateName="adType"
							options={menus.adTypeOptions}
							onChange={this.handleChangeVal }
						/>
					</div>
				</div>

				<div className="flex-column flex-md flex-sm">
					<div className="flex-item">
						<Input
							title="投放地址"
							value={addSubmitData.adAddr}
							stateName="adAddr"
							change={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<Input
							title="链接域名"
							value={addSubmitData.adDomain}
							stateName="adDomain"
							change={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<Select
							value={addSubmitData.adSocialSoftware}
							title="社交软件"
							stateName="adSocialSoftware"
							options={menus.socialsoftOptins}
							onChange={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<Input
							title="成本预算"
							value={addSubmitData.adCostBudget}
							stateName="adCostBudget"
							change={this.handleChangeVal }
						/>
					</div>
				</div>
				<div className="flex-column flex-md flex-sm">
					<div className="flex-item">
						<DatePick
							value={addSubmitData.adStartTime}
							title="开始时间"
							stateName="adStartTime"
							onChange={this.handleChangeVal }
						/>
					</div>
					<div className="flex-item">
						<DatePick
							value={addSubmitData.adEndTime}
							title="结束时间起始"
							stateName="adEndTime"
							onChange={this.handleChangeVal }
						/>
					</div>
				</div>
			</Dialog>
		);
	}
}

let mapStateToProps = state => ({
	menus: state.menuRedurce, // 菜单和下拉选项的数据
	operateResult: state.requestState.adAddRequest, // 查询新增数据的结果
	addSubmitData: state.appState.adAdd
});

export default connect(mapStateToProps)(ModalAddAd);