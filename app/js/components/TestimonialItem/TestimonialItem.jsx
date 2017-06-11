import React from 'react';
import PropTypes from 'prop-types';

import VideoModalButton from '../VideoModalButton/VideoModalButton.jsx';

export default class TestimonialItem extends React.Component {

	render() {
		return (
			<div className={'testimonial-item text-center ' + this.props.person.className}>
				<div className="text-sm text-green text-center text-condensed">TESTIMONIALS</div>
				<div className="text-lg text-white text-center page-heading">{this.props.person.name}</div>
				<div className="text-md text-white testimonial-blurb">{this.props.person.testimonial}</div>
				<div className="button-container">
					<VideoModalButton videoId={this.props.person.videoId} gateway={this.props.person.gateway} />
					<div className="text-sm text-condensed text-white">VIEW TESTIMONIAL</div>
				</div>
			</div>
		);
	}

}

TestimonialItem.propTypes = {
	person: PropTypes.object
};