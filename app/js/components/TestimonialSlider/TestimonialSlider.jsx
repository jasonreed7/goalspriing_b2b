import React from 'react';

import Slider from 'react-slick';

import TestimonialItem from '../TestimonialItem/TestimonialItem.jsx';

import dianeBackgroundPic from '../../../images/testimonials/backgrounds/diane.png';
import emmaBackgroundPic from '../../../images/testimonials/backgrounds/emma.png';
import daveBackgroundPic from '../../../images/testimonials/backgrounds/dave.png';
import dianeCirclePic from '../../../images/testimonials/circles/diane.png';
import emmaCirclePic from '../../../images/testimonials/circles/emma.png';
import daveCirclePic from '../../../images/testimonials/circles/dave.png';

var testimonialItems = [
	{
		name: 'Diane Sadoski-Joseph',
		testimonial: `Short blurb about person and experience with Goalspriing. This should not
		exceed more than two lines or 140 characters, including spaces.`,
		backgroundPic: dianeBackgroundPic,
		circlePic: dianeCirclePic,
		className: 'testimonial-item-diane'
	},
	{
		name: 'Emma Leeds',
		testimonial: `Short blurb about person and experience with Goalspriing. This should not
		exceed more than two lines or 140 characters, including spaces.`,
		backgroundPic: emmaBackgroundPic,
		circlePic: emmaCirclePic,
		className: 'testimonial-item-emma'
	},
	{
		name: 'Dave Liao',
		testimonial: `Short blurb about person and experience with Goalspriing. This should not
		exceed more than two lines or 140 characters, including spaces.`,
		backgroundPic: daveBackgroundPic,
		circlePic: daveCirclePic,
		className: 'testimonial-item-dave'
	}
];

export default class TestimonialSlider extends React.Component {

	render() {

		var testimonialItemComponents = testimonialItems.map( (testimonialItem, index) => {
			return (
				<div key={'testimonial-item-' + index}>
					<TestimonialItem person={testimonialItem} />
				</div>
			);
		});

		var settings = {
			autoplay: true,
			autoplaySpeed: 10000,
			className: 'testimonial-slider',
			dots: true,
			dotsClass: 'testimonial-slider-dots',
			draggable: true,
			customPaging: (i) => {
				return (
					<div>
						<a className='testimonial-slider-dot-desktop'><img src={testimonialItems[i].circlePic} /></a>
						<button className='testimonial-slider-dot-mobile'>{i + 1}</button>
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
				{testimonialItemComponents}
			</Slider>
		);
	}

}