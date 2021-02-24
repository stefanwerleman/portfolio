import React from 'react';
import './Job.css';

import { Container, Image } from 'react-bootstrap';

class Job extends React.Component {
	render() {
		const {
			logo,
			position,
			company,
			date,
			location,
			description,
		} = this.props.job;

		return (
			<div id='job'>
				<Container id='job-container'>
					<div id='logo-container'>
						<Image
							id='company-logo'
							src={logo}
							alt='Company Logo'
							rounded
						/>
					</div>
					<div id='job-info-container'>
						<h6 id='position'>{position}</h6>
						<p id='company'>{company}</p>
						<p id='date'>{date}</p>
						<p id='location'>{location}</p>
						<p id='description'>{description}</p>
					</div>
				</Container>
			</div>
		);
	}
}

export default Job;
