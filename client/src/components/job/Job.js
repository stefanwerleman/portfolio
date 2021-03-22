import React from 'react';
import './Job.css';

import { Image } from 'react-bootstrap';

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
				<div id='job-logo-container'>
					<Image
						id='company-logo'
						src={logo}
						alt='Company Logo'
						rounded
					/>
				</div>
				<div id='job-info-container'>
					<p id='position'>{position}</p>
					<p id='company'>{company}</p>
					<p id='date'>{date}</p>
					<p id='location'>{location}</p>
					<p id='description'>{description}</p>
				</div>
			</div>
		);
	}
}

export default Job;
