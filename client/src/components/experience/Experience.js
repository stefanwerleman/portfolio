import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Experience.css';

// Child Component
import Job from '../job/Job';

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
					<Row>
						<Job />
					</Row>
				</Container>
			</div>
		);
	}
}

const styles = {
	mainLine: {
		borderColor: '#FF1B1C',
		borderWidth: 5,
	},
};

export default Experience;
