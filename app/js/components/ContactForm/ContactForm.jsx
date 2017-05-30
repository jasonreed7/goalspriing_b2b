import React from 'react';

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: ''
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
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
		console.log(this.state);
		var name = this.state.name;
		var email = this.state.email;
		var message = this.state.message;

		// If valid inputs, send request
		if(name && email && message) {

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

		event.preventDefault();
	}

	render() {
		return (
			<div className="contact-form-container">
				<form className="contact-form" onSubmit={this.handleSubmit} >
					<div className="contact-form-row">
						<input type="text" name="name" placeholder="Your name" className="text-sm text-light contact-form-input" required value={this.state.name} onChange={this.handleNameChange} />
					</div>
					<div className="contact-form-row">
						<input type="email" name="email" placeholder="Your email address" className="text-sm text-light contact-form-input" required value={this.state.email}  onChange={this.handleEmailChange} />
					</div>
					<div className="contact-form-row">
						<textarea name="message" placeholder="Your message" rows="8" className="text-sm text-light contact-form-textarea" required value={this.state.message} onChange={this.handleMessageChange} ></textarea>
					</div>
					<div className="contact-form-row">
						<input type="submit" value="send message" className="text-sm text-green text-light contact-form-button" />
					</div>
				</form>
			</div>
		);
	}

}