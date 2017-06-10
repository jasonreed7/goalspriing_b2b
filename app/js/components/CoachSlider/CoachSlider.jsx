import React from 'react';

import Slider from 'react-slick';

import davidPic from '../../../images/coaches/circles/David_Matthew_Prior.png';
import beatricePic from '../../../images/coaches/circles/Beatrice_Leon.png';
import dwightPic from '../../../images/coaches/circles/Dwight_Conley.png';
import erinPic from '../../../images/coaches/circles/Erin_Nicole_Smith.png';
import matthewPic from '../../../images/coaches/circles/Matthew_Laffer.png';

var coachDots = [davidPic, beatricePic, dwightPic, erinPic, matthewPic];

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
					<div className="text-lg coach-name">David</div>
					<div className="text-sm coach-title">Learning & Development</div>
					<div className="text-md coach-description">
						David is a pioneer of the coaching industry and teaches coaching at Columbia University.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Beatrice</div>
					<div className="text-sm coach-title">Chief Information Officer</div>
					<div className="text-md coach-description">
						Beatrice is an accomplished IT executive with over 30 years of experience. Oh, and she is also a black belt in Karate and has sailed around the world.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Dwight</div>
					<div className="text-sm coach-title">Athlete Turned Coach</div>
					<div className="text-md coach-description">
						Dwight is an athlete turned coach. His path to coaching began on the football field and then as a mentor to youth in South Central Los Angeles.
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Erin</div>
					<div className="text-sm coach-title">Human Flourishing</div>
					<div className="text-md coach-description">
						Erin has her Master&apos;s in Applied Positive Psychology and she integrates Eastern philosophies with Western Science to help facilitate human flourishing
					</div>
				</div>
				<div className="text-center text-white">
					<div className="text-lg coach-name">Matthew</div>
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