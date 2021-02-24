import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';

// Child Component
import Job from '../job/Job';

// Job List
import jobs from '../jobList/jobList';

class Experience extends React.Component {
	render() {
		return (
			<div id='experience'>
				<Container id='experience-container' fluid>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<p id='experience-title' className='display-4'>
								Experience
							</p>
							<hr style={styles.mainLine} />
						</Col>
					</Row>
					<Row id='job-list-row'>
						{jobs.map((job, index) => {
							if (index !== 0 && index !== jobs.length - 1) {
								return (
									<div>
										<hr id='job-divider' />
										<Job key={job.id} job={job} />
										<hr id='job-divider' />
									</div>
								);
							} else {
								return <Job key={job.id} job={job} />;
							}
						})}
					</Row>
				</Container>
			</div>
		);
	}
}

const styles = {
	mainLine: {
		borderColor: '#D7263D',
		borderWidth: 5,
	},
};

export default Experience;
