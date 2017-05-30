import React from 'react';
import PropTypes from 'prop-types';

export default class TeamItem extends React.Component {

	render() {
		return (
			<div className='team-item text-center text-sm'>
				<div className='team-picture-container text-center'>
					<img className='team-picture' src={ this.props.person.picture } />
					<div className='team-text-overlay'>
						<div className='team-name'>{ this.props.person.name }</div>
						<div className='team-title'>{ this.props.person.title }</div>
						<div className='team-description'>{ this.props.person.description }</div>
					</div>
				</div>
				<div className='team-text'>
					<div className='team-name'>{ this.props.person.name }</div>
					<div className='team-title'>{ this.props.person.title }</div>
					<div className='team-description'>{ this.props.person.shortDescription + '...'}</div>
				</div>
			</div>
		);
	}

}

TeamItem.propTypes = {
	person: PropTypes.object
};