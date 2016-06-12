/**
 * Created by yvan on 16/6/8.
 */
import React from 'react';
import './loading.scss';

export default class Loading extends React.Component {
	render() {
		if(this.props.show) {
			return (
				<div id="loading">
					<div id="loading-main">
						<div className="spinner">
							<div className="spinner-container container1">
								<div className="circle1"></div>
								<div className="circle2"></div>
								<div className="circle3"></div>
								<div className="circle4"></div>
							</div>
							<div className="spinner-container container2">
								<div className="circle1"></div>
								<div className="circle2"></div>
								<div className="circle3"></div>
								<div className="circle4"></div>
							</div>
							<div className="spinner-container container3">
								<div className="circle1"></div>
								<div className="circle2"></div>
								<div className="circle3"></div>
								<div className="circle4"></div>
							</div>
						</div>
					</div>
				</div>
			)
		}
		else {
			return this.props.show
		}
	}
}