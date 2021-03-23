import React from 'react';
import './Contact.css';

class Contact extends React.Component {
	render() {
		const { logo, type, link } = this.props.contact;

		const getLink = () => {
			return type === 'Email' ? 'mailto:' + link : link;
		};

		return (
			<div id='contact-item-container'>
				<div id='contact-logo-container'>
					<h1 id='contact-logo'>{logo}</h1>
				</div>
				<div id='contact-type-container'>
					<p id='contact-type'>{type}</p>
					<a
						id='contact-link'
						href={getLink()}
						target='_blank'
						rel='noopener noreferrer'>
						{link}
					</a>
				</div>
			</div>
		);
	}
}

export default Contact;
