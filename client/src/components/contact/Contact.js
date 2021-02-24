import React from 'react';
import './Contact.css';

import { Container } from 'react-bootstrap';

class Contact extends React.Component {
	render() {
		const { logo, type, link } = this.props.contact;

		const getLink = () => {
			return type === 'Email' ? 'mailto:' + link : link;
		};

		return (
			<div id='contact-item-container'>
				<Container id='contact-container-info' fluid>
					<div id='contact-logo-container'>{logo}</div>
					<div id='contact-type-container'>
						<h6 id='contact-type'>{type}</h6>
						<a
							id='contact-link'
							href={getLink()}
							target='_blank'
							rel='noopener noreferrer'>
							{link}
						</a>
					</div>
				</Container>
			</div>
		);
	}
}

export default Contact;
