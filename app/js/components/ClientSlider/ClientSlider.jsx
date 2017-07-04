import React from 'react';

import Slider from 'react-slick';

import cultureAmpLogo from '../../../images/client-logos/culture-amp.png';
import sailthruLogo from '../../../images/client-logos/sailthru.png';
import kickstarterLogo from '../../../images/client-logos/kickstarter.png';
import flatironLogo from '../../../images/client-logos/flatiron.png';
import stellaServiceLogo from '../../../images/client-logos/stellaservice.png';
import omazeLogo from '../../../images/client-logos/omaze.png';
import firstDibsLogo from '../../../images/client-logos/1stdibs.png';
import eeroLogo from '../../../images/client-logos/eero.png';
import shapewaysLogo from '../../../images/client-logos/shapeways.png';
import ideoLogo from '../../../images/client-logos/ideo.png';

export default class CoachSlider extends React.Component {

	componentDidMount() {
		setInterval(() => {
			this.slider.slickNext();
		},
			3000);
	}

	// Use componentDidMount instead of autoplay until fix in react-slick
	// See https://github.com/akiran/react-slick/pull/651
	render() {
		// var settings = {
		// 	arrows: false,
		// 	autoplay: true,
		// 	autoplaySpeed: 3000,
		// 	className: 'client-slider',
		// 	dots: false,
		// 	draggable: true,
		// 	infinite: true,
		// 	pauseOnHover: true,
		// 	speed: 500,
		// 	slidesToShow: 1,
		// 	slidesToScroll: 1
		// };

		var settings = {
			arrows: false,
			className: 'client-slider',
			dots: false,
			draggable: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<Slider {...settings} ref={c => this.slider = c} >
				<div className="text-center client-slide">
					<div className="client-slide-logo-container">
						<img src={cultureAmpLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={sailthruLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={kickstarterLogo} className="client-slide-logo" />
					</div>
				</div>
				<div className="text-center client-slide">
					<div className="client-slide-logo-container">
						<img src={flatironLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={stellaServiceLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={omazeLogo} className="client-slide-logo" />
					</div>
				</div>
				<div className="text-center client-slide">
					<div className="client-slide-logo-container">
						<img src={firstDibsLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={eeroLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={shapewaysLogo} className="client-slide-logo" />
					</div>
					<div className="client-slide-logo-container">
						<img src={ideoLogo} className="client-slide-logo" />
					</div>
				</div>
			</Slider>
		);
	}

}