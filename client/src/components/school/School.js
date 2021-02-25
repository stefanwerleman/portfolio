import React from 'react';
// import './School.css';

import { Container, Image } from 'react-bootstrap';

class School extends React.Component {
	render() {
		const {
			schoolLogo,
			school,
			degree,
			gpa,
			date,
			activities,
			description,
		} = this.props.school;

		return (
			<div id='school'>
				<Container id='school-container' fluid>
					<div id='school-logo-container'>
						<Image
							id='school-logo'
							src={schoolLogo}
							alt='School Logo'
							rounded
						/>
					</div>
					<div id='school-info-container'>
						<h6 id='school-name'>{school}</h6>
						<p id='degree'>{degree}</p>
						<p id='gpa'>{gpa}</p>
						<p id='date'>{date}</p>
						<p id='activities'>
							Activities and Societies: {activities}
						</p>
						<p id='description'>{description}</p>
					</div>
				</Container>
			</div>
		);
	}
}

export default School;
