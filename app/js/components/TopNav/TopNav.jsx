import React from 'react';
import Headroom from 'react-headroom';
import { CSSTransitionGroup } from 'react-transition-group';
//import TransitionGroup from 'react-transition-group/TransitionGroup';

import logo from '../../../images/goalspriing-logos/logo-white.svg';

export default class TopNav extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			open: false,
			fixed: false
		};

		this.toggleOpen = this.toggleOpen.bind(this);
		this.getHeadroomStyle = this.getHeadroomStyle.bind(this);
		this.unfix = this.unfix.bind(this);
	}

	toggleOpen() {
		var that = this;

		if(this.state.open) {
			setTimeout(that.unfix, 500);
		}

		this.setState({
			open: !this.state.open,
			fixed: true
		});
	}

	unfix() {
		this.setState({ fixed: false });
	}

	getHeadroomStyle() {
		if(this.state.fixed) {
			return {
				position: 'fixed'
			};
		}

		return {};
	}

	render() {

		var menu = '';

		if(this.state.open) {
			menu = (
				<nav key="menu" className={'menu ' + (this.state.open ? 'menu-open' : '')}>
					<div className="menu-item text-sm text-center">
						<a href="#about" className="menu-link text-condensed">ABOUT</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#coaches" className="menu-link text-condensed">OUR COACHES</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#how-it-works" className="menu-link text-condensed">HOW IT WORKS</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#testimonials" className="menu-link text-condensed">TESTIMONIALS</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#pricing" className="menu-link text-condensed">PRICING</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#clients" className="menu-link text-condensed">CLIENTS</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#team" className="menu-link text-condensed">TEAM</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#contact" className="menu-link text-condensed">CONTACT</a>
					</div>
				</nav>
			);
		}

		return (
			<Headroom pinStart={900}
				disable={this.state.fixed}
				style={this.getHeadroomStyle()}
			>
				<nav className={'top-nav ' + (this.state.open ? 'top-nav-open ' : '') + (this.state.fixed ? 'top-nav-fixed' : '')}>
					<div className="nav-logo-container text-md">
						<img src={logo} className="nav-logo" />
					</div>
					<div className="hamburger-button-container text-right">
						<button className={'hamburger hamburger--spin ' + (this.state.open ? 'is-active' : '')} type="button" onClick={this.toggleOpen}>
							<span className="hamburger-box">
								<span className="hamburger-inner"></span>
							</span>
						</button>
					</div>
				</nav>
				<CSSTransitionGroup
					transitionName="menu-transition"
					transitionEnterTimeout={0}
					transitionLeaveTimeout={0}
				>
						{menu}
				</CSSTransitionGroup>
			</Headroom>
		);
	}

}