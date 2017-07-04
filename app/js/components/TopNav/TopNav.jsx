import React from 'react';
import Headroom from 'react-headroom';
import { CSSTransitionGroup } from 'react-transition-group';

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
				position: 'fixed',
				zIndex: 15
			};
		}

		return {
			zIndex: 15
		};
	}

	render() {

		var menu = '';

		if(this.state.open) {
			menu = (
				<nav key="menu" className={'menu ' + (this.state.open ? 'menu-open' : '')}>
					<div className="menu-item text-sm text-center">
						<a href="#about" className="menu-link text-condensed" onClick={this.toggleOpen}>ABOUT</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#coaches" className="menu-link text-condensed" onClick={this.toggleOpen}>OUR COACHES</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#how-it-works" className="menu-link text-condensed" onClick={this.toggleOpen}>HOW IT WORKS</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#testimonials" className="menu-link text-condensed" onClick={this.toggleOpen}>TESTIMONIALS</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#pricing" className="menu-link text-condensed" onClick={this.toggleOpen}>PRICING</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#clients" className="menu-link text-condensed" onClick={this.toggleOpen}>CLIENTS</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#team" className="menu-link text-condensed" onClick={this.toggleOpen}>TEAM</a>
					</div>
					<div className="menu-item text-sm text-center">
						<a href="#contact" className="menu-link text-condensed" onClick={this.toggleOpen}>CONTACT</a>
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
						<a href="/">
							<img src={logo} className="nav-logo" />
						</a>
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