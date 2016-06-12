/**
 * Created by yvan on 16/6/10.
 */

import React from 'react';
import classNames from './_flex.scss';

const styleMaps = {
	SIZES: {
		'large': 'lg',
		'medium': 'md',
		'small': 'sm',
		'xsmall': 'xs',
		'lg': 'lg',
		'md': 'md',
		'sm': 'sm',
		'xs': 'xs'
	},
	GRID_COLUMNS: 12
};

export default class Col extends Component {
	static propTypes: {
			/**
			 * The number of columns you wish to span
			 * for Extra small devices Phones (<768px)
			 * class-prefix `col-xs-`
			 */
			xs: React.PropTypes.number,
			sm: React.PropTypes.number,
			md: React.PropTypes.number,
			lg: React.PropTypes.number,
			/**
			 * Hide column
			 * on Extra small devices Phones
			 * adds class `hidden-xs`
			 */
			xsHidden: React.PropTypes.bool,
			smHidden: React.PropTypes.bool,
			mdHidden: React.PropTypes.bool,
			lgHidden: React.PropTypes.bool,
			/**
			 * Move columns to the right
			 * for Extra small devices Phones
			 * class-prefix `col-xs-offset-`
			 */
			xsOffset: React.PropTypes.number,
			smOffset: React.PropTypes.number,
			mdOffset: React.PropTypes.number,
			lgOffset: React.PropTypes.number,
			/**
			 * Change the order of grid columns to the right
			 * for Extra small devices Phones
			 * class-prefix `col-xs-push-`
			 */
			xsPush: React.PropTypes.number,
			smPush: React.PropTypes.number,
			mdPush: React.PropTypes.number,
			lgPush: React.PropTypes.number,
			/**
			 * Change the order of grid columns to the left
			 * for Extra small devices Phones
			 * class-prefix `col-xs-pull-`
			 */
			xsPull: React.PropTypes.number,
			smPull: React.PropTypes.number,
			mdPull: React.PropTypes.number,
			lgPull: React.PropTypes.number
		}


	render() {
		let classes = {};

		Object.keys(styleMaps.SIZES).forEach( key => {
			let size = styleMaps.SIZES[key];
			let prop = size;
			let classPart = size + '-';

			if (this.props[prop]) {
				classes['col-' + classPart + this.props[prop]] = true;
			}

			classes['hidden-' + size] = this.props[size + 'Hidden'];

			prop = size + 'Offset';
			classPart = size + '-offset-';
			if (this.props[prop] >= 0) {
				classes['col-' + classPart + this.props[prop]] = true;
			}

			prop = size + 'Push';
			classPart = size + '-push-';
			if (this.props[prop] >= 0) {
				classes['col-' + classPart + this.props[prop]] = true;
			}

			prop = size + 'Pull';
			classPart = size + '-pull-';
			if (this.props[prop] >= 0) {
				classes['col-' + classPart + this.props[prop]] = true;
			}
		}, this);

		return (
			<div {...this.props} className={classNames(this.props.className, classes)}>
				{this.props.children}
			</div>
		);
	}
}

export default Col;