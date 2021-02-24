import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

// Child Component(s)
import School from '../school/School';

// School list
import schools from '../schoolList/schoolList';

// TODO: Include FLit-Path Organization in here.
class Education extends React.Component {
	render() {
		return (
			<div id='education'>
				<Container id='education-container' fluid>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<p id='education-title' className='display-4'>
								Education
							</p>
							<hr style={styles.mainLine} />
						</Col>
					</Row>
					<Row id='school-list-row'>
						{schools.map((school, index) => {
							if (index === 0) {
								return (
									<div>
										<School
											key={school.id}
											school={school}
										/>
										<hr id='school-divider' />
									</div>
								);
							} else if (index !== schools.length - 1) {
								return (
									<div>
										<School
											key={school.id}
											school={school}
										/>
										<hr id='school-divider' />
									</div>
								);
							} else {
								return (
									<School key={school.id} school={school} />
								);
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

export default Education;
