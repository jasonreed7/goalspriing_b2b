import 'normalize.css';
import '../sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CoachSlider from './components/CoachSlider/CoachSlider.jsx';

console.log('hi');

const a = () => {
	console.log('es6');
};

a();

ReactDOM.render(<CoachSlider />, document.getElementById('coach-slider-container'));