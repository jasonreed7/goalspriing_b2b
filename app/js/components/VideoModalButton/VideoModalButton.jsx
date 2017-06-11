import React from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import {Gateway} from 'react-gateway';
import Player from '@vimeo/player';

export default class VideoModalButton extends React.Component {

	constructor() {
		super();
		this.state = {
			isOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({ 
			isOpen: true
		});
	}

	closeModal() {
		this.setState({
			isOpen: false
		});
	}

	componentDidUpdate() {
		// If video is open, set video to close on end
		if(this.state.isOpen) {
			var that = this;

			/* 
			Need to put a delay before setting close on video end, because the iframe 
			is not in the DOM at componentDidUpdate time due to the gateways.
			TODO: make this not require a setTimeout (ugly)
			*/
			setTimeout(() => {
				var iframe = document.querySelector('.modal-video iframe');
				var player = new Player(iframe);

				player.on('ended', () => {
					that.closeModal();
				});
			}, 10);
		}
	}

	render() {
		if(this.props.gateway) {
			return (
				<div>
					<Gateway into={this.props.gateway}>
						<ModalVideo channel="vimeo" isOpen={this.state.isOpen} onClose={this.closeModal} videoId={this.props.videoId} ref={(modalVideo) => { this.modalVideo = modalVideo; }} />
					</Gateway>
					<button className="play-button" onClick={this.openModal}></button>
				</div>
			);
		}
		else {
			return (
				<div>
					<ModalVideo channel="vimeo" isOpen={this.state.isOpen} onClose={() => this.setState({isOpen: false})} videoId={this.props.videoId} api={true} ref={(modalVideo) => { this.modalVideo = modalVideo; }} />
					<button className="play-button" onClick={this.openModal}></button>
				</div>
			);
		}
	}

}

VideoModalButton.propTypes = {
	videoId: PropTypes.string,
	gateway: PropTypes.string
};