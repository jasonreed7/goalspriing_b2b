import React from 'react';

export default class CoachSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			year: (new Date()).getFullYear()
		};
	}

	render() {
		return (
			<div className="footer-content">
				<div className="footer-left text-white">© {this.state.year} Goalspriing. All Rights Reserved.</div>
				<div className="footer-right text-condensed">
					<div className="footer-link-container">
						<a href="#about" className="footer-link text-white">about</a>
					</div>
					<div className="footer-link-container">
						<a href="#coaches" className="footer-link text-white">our coaches</a>
					</div>
					<div className="footer-link-container">
						<a href="#how-it-works" className="footer-link text-white">how it works</a>
					</div>
					<div className="footer-link-container">
						<a href="#testimonials" className="footer-link text-white">testimonials</a>
					</div>
					<div className="footer-link-container">
						<a href="#pricing" className="footer-link text-white">pricing</a>
					</div>
					<div className="footer-link-container">
						<a href="#clients" className="footer-link text-white">clients</a>
					</div>
					<div className="footer-link-container">
						<a href="#team" className="footer-link text-white">team</a>
					</div>
					<div className="footer-link-container footer-link-container-last">
						<a href="#contact" className="footer-link text-white">contact</a>
					</div>
				</div>
			</div>
		);
	}
}