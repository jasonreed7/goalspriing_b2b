import 'normalize.css';
import '../sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './components/TopNav/TopNav.jsx';
import CoachSlider from './components/CoachSlider/CoachSlider.jsx';
import TeamSlider from './components/TeamSlider/TeamSlider.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider.jsx';
import ClientSlider from './components/ClientSlider/ClientSlider.jsx';
import VideoModalButton from './components/VideoModalButton/VideoModalButton.jsx';

console.log('hi');

const a = () => {
	console.log('es6');
};

a();

ReactDOM.render(<TopNav />, document.getElementById('nav-container'));
ReactDOM.render(<CoachSlider />, document.getElementById('coach-slider-container'));
ReactDOM.render(<TeamSlider />, document.getElementById('team-slider-container'));
ReactDOM.render(<ContactForm />, document.getElementById('contact-form-container'));
ReactDOM.render(<TestimonialSlider />, document.getElementById('testimonial-slider-container'));
ReactDOM.render(<ClientSlider />, document.getElementById('client-slider-container'));
ReactDOM.render(<ClientSlider />, document.getElementById('client-slider-container-home'));
ReactDOM.render(<VideoModalButton videoId='199929514' />, document.getElementById('hero-button-container'));