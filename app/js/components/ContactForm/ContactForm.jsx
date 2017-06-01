import React from 'react';

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: '',
			nameError: false,
			emailError: false,
			messageError: false,
			submitted: false
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.removeErrors = this.removeErrors.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}

	handleEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	handleMessageChange(event) {
		this.setState({ message: event.target.value });
	}

	handleSubmit(event) {

		event.preventDefault();

		var name = this.state.name;
		var email = this.state.email;
		var message = this.state.message;

		// Validate
		if(!this.nameInput.checkValidity()) {
			this.setState({ nameError: true });
			return;
		}

		if(!this.emailInput.checkValidity()) {
			this.setState({ emailError: true });
			return;
		}

		if(!this.messageInput.checkValidity()) {
			this.setState({ messageError: true });
			return;
		}

		// If valid inputs, send request and set submitted to true

		this.setState({ submitted: true });

		var data = JSON.stringify({
			CompanyName: '',
			Email: email,
			EmployeeRange: '',
			FormEntryType: 2,
			Message: message,
			Name: name,
			Phone: '',
			Subject: 'Message from ' + name + ' through goalspriing.com',
			Title: ''
		});

		var headers = new Headers();
		headers.append('Content-Type', 'application/json; charset=utf-8');

		var init = {
			method: 'POST',
			headers: headers,
			body: data
		};

		fetch('http://cycwebapi2.azurewebsites.net/val/FormEntries', init);

	}

	removeErrors() {
		this.setState({
			nameError: false,
			emailError: false,
			messageError: false
		});
	}

	getErrorMessage() {

		if(this.state.nameError) {
			return 'Please add name';
		}
		else if(this.state.emailError) {
			return 'Please add valid email';
		}
		else if(this.state.messageError) {
			return 'Please add message';
		}

	}

	render() {

		// If submitted return thank you message
		if(this.state.submitted) {
			return (
				<div className="contact-form-container">
					<div className="contact-thanks-message text-md text-white">
						Thank you for contacting us. <br />
						You&apos;ll hear from us within a day.
					</div>
				</div>
			);
		}

		var errorMessage = this.getErrorMessage();

		var error = '';
		if(errorMessage) {
			error = (
				<div className="error-message text-sm text-white">{errorMessage}</div>
			);
		}

		return (
			<div className="contact-form-container">
				<form className="contact-form" onSubmit={this.handleSubmit} noValidate >
					<div className="contact-form-row">
						<input type="text" name="name" placeholder="Your name" ref={(input) => { this.nameInput = input; }} className={'text-sm text-light contact-form-input ' + (this.state.nameError ? 'input-error' : '') } noValidate required value={this.state.name} onChange={this.handleNameChange} onFocus={this.removeErrors} />
					</div>
					<div className="contact-form-row">
						<input type="email" name="email" placeholder="Your email address" ref={(input) => { this.emailInput = input; }} className={'text-sm text-light contact-form-input ' + (this.state.emailError ? 'input-error' : '')} noValidate required value={this.state.email}  onChange={this.handleEmailChange} onFocus={this.removeErrors} />
					</div>
					<div className="contact-form-row">
						<textarea name="message" placeholder="Your message" rows="8" ref={(textarea) => { this.messageInput = textarea; }} className={'text-sm text-light contact-form-textarea ' + (this.state.messageError ? 'input-error' : '')} noValidate required value={this.state.message} onChange={this.handleMessageChange} onFocus={this.removeErrors} ></textarea>
					</div>
					<div className="contact-form-row contact-form-submit-row text-center">
						<input type="submit" value="send message" className="text-sm text-green text-light contact-form-button" />
						{error}
					</div>
				</form>
			</div>
		);
	}

}