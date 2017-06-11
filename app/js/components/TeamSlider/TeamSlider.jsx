import React from 'react';

import Slider from 'react-slick';
import TeamItem from '../TeamItem/TeamItem.jsx';

import matthewPic from '../../../images/team/matthew.png';
import davidRPic from '../../../images/team/david_r.png';
import paulinePic from '../../../images/team/pauline.png';
import davidMPPic from '../../../images/team/david_mp.png';
import richardPic from '../../../images/team/richard.png';
import jasonPic from '../../../images/team/jason.png';

function TeamMember({name, title, description, shortDescription, picture}) {
	this.name = name;
	this.title = title;
	this.description = description;
	this.picture = picture;
	this.shortDescription = shortDescription;
}

var teamMembers = [
	new TeamMember({
		name: 'Matthew Laffer',
		title: 'Founder & CEO',
		description: 'Matthew is a 3x entrepreneur with a successful track record of building great companies that foster healthy living and enhanced quality of life for people all around the world.',
		shortDescription: 'Matthew is a 3x entrepreneur',
		picture: matthewPic
	}),
	new TeamMember({
		name: 'David Reed',
		title: 'CTO',
		description: 'David has extensive experience in computer science and he works late into the evening exploiting emerging technologies to make goal achievement more accessible.',
		shortDescription: 'David has extensive experience',
		picture: davidRPic
	}),
	new TeamMember({
		name: 'Pauline Fatien Diochon',
		title: 'Head of Research',
		description: 'Pauline is an early researcher of coaching and she founded a graduate-level, executive coaching program.',
		shortDescription: 'Pauline is an early researcher',
		picture: paulinePic
	}),
	new TeamMember({
		name: 'David Matthew Prior',
		title: 'Learning & Development',
		description: 'David is an early pioneer of the coaching industry and teaches coaching at Columbia University and the University of Texas.',
		shortDescription: 'David is an early pioneer',
		picture: davidMPPic
	}),
	new TeamMember({
		name: 'Richard Lohr',
		title: 'Creative Director',
		description: 'Richard is obsessed with making the world more beautiful and easier to understand by design.',
		shortDescription: 'Richard is obsessed',
		picture: richardPic
	}),
	new TeamMember({
		name: 'Jason Reed',
		title: 'Front-End Developer',
		description: 'Designing happiness and vice versa.',
		shortDescription: 'Designing happiness and',
		picture: jasonPic
	})
];

export default class CoachSlider extends React.Component {

	render() {
		var settings = {
			arrows: false,
			autoplay: true,
			autoplaySpeed: 10000,
			dots: true,
			draggable: true,
			infinite: true,
			pauseOnHover: true,
			responsive: [{ breakpoint: 1000000, settings: 'unslick' }, { breakpoint: 767, settings: {} }],
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		var teamItems = teamMembers.map(function(teamMember, index) {
			return <div className="team-item-container" key={ 'team-' + index }><TeamItem person={ teamMember } /></div>;
		});

		return (
			<Slider {...settings}>
				{ teamItems }
			</Slider>
		);
	}

}