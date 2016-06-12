/**
 * Created by yvan on 16/6/2.
 */

export const tableInitialPageLength = 5;
export const tablePageLengthOptions = [5 , 10 , 50];// table的一页显示的条数选项


// ajax请求接口
export const AJAXURL = {
	adSearch : "http://10.72.3.27:8080/tsied_rebuilt/ad/getdata",	//查询广告
	adAdd    : "http://10.72.3.27:8080/tsied_rebuilt/ad/addormodify", //新增和编辑广告
	adDelete : "http://10.72.3.27:8080/tsied_rebuilt/ad/del", //删除广告
	pvSearch : "http://10.72.3.27:8080/tsied_rebuilt/flow", //查询pv
	userAnalyzeSearch : "http://10.72.3.27:8080/tsied_rebuilt/user" //查询用户分析
};