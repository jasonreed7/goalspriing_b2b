import 'normalize.css';
import '../sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CoachSlider from './components/CoachSlider/CoachSlider.jsx';
import TeamSlider from './components/TeamSlider/TeamSlider.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';

console.log('hi');

const a = () => {
	console.log('es6');
};

a();

ReactDOM.render(<CoachSlider />, document.getElementById('coach-slider-container'));
ReactDOM.render(<TeamSlider />, document.getElementById('team-slider-container'));
ReactDOM.render(<ContactForm />, document.getElementById('contact-form-container'));