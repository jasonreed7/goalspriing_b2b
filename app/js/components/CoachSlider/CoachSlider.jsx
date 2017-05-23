import React from 'react';

import Slider from 'react-slick';

import matthewPic from '../../../images/coaches/circles/Matthew_Laffer.png';
import beatricePic from '../../../images/coaches/circles/Beatrice_Leon.png';
import dwightPic from '../../../images/coaches/circles/Dwight_Conley.png';
import bethPic from '../../../images/coaches/circles/Beth_Gladis.png';
import alioncaPic from '../../../images/coaches/circles/Alionka_Polanco.png';

var coachDots = [matthewPic, beatricePic, dwightPic, bethPic, alioncaPic];

export default class CoachSlider extends React.Component {

	render() {
		var settings = {
			autoplay: true,
			autoplaySpeed: 10000,
			dots: true,
			dotsClass: 'coach-slider-dots',
			draggable: true,
			customPaging: (i) => {
				return (
					<div>
						<a className='coach-slider-dot-desktop'><img src={coachDots[i]} /></a>
						<button className='coach-slider-dot-mobile'>{i + 1}</button>
					</div>
				);
			},
			infinite: true,
			pauseOnHover: true,
			responsive: [{breakpoint: 767, settings: {dotsClass: 'slick-dots'}}],
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<Slider {...settings} >
				<div className="text-center text-white">
					<div className="text-lg coach-name">Matthew</div>
					<div className="text-sm coach-title">Founder and CEO</div>
					<div className="text-md coach-description">
						Matthew is a 3x entrepreneur with a successful track record of building great
						companies that foster healthy living and enhanced quality of life for people all
						around the world.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Beatrice</div>
					<div className="text-sm coach-title">Founder and CEO</div>
					<div className="text-md coach-description">
						Matthew is a 3x entrepreneur with a successful track record of building great
						companies that foster healthy living and enhanced quality of life for people all
						around the world.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Dwight</div>
					<div className="text-sm coach-title">Founder and CEO</div>
					<div className="text-md coach-description">
						Matthew is a 3x entrepreneur with a successful track record of building great
						companies that foster healthy living and enhanced quality of life for people all
						around the world.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Beth</div>
					<div className="text-sm coach-title">Founder and CEO</div>
					<div className="text-md coach-description">
						Matthew is a 3x entrepreneur with a successful track record of building great
						companies that foster healthy living and enhanced quality of life for people all
						around the world.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Alionka</div>
					<div className="text-sm coach-title">Founder and CEO</div>
					<div className="text-md coach-description">
						Matthew is a 3x entrepreneur with a successful track record of building great
						companies that foster healthy living and enhanced quality of life for people all
						around the world.
					</div>
				</div>
			</Slider>
		);
	}

}