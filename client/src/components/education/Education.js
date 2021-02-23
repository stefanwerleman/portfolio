import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

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
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<h2 id='education-school'>
								<strong>University of Central Florida</strong>
							</h2>
						</Col>
					</Row>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<h5
								id='education-major'
								style={{ color: '#39689b' }}>
								Bachelor of Science in Computer Science
							</h5>
						</Col>
					</Row>
					<Row
						id='education-info-row'
						className='justify-content-md-center'>
						<Col md='auto'>
							<h5 id='education-info'>
								<strong>Graduating:</strong> August 2021 |{' '}
								<strong>GPA:</strong> 3.826
							</h5>
						</Col>
					</Row>
					<Row className='justify-content-md-center'>
						<Col md='auto'>
							<p id='education-text'>
								At UCF, I studied <strong>Algorithms</strong>{' '}
								and <strong>Data Structures</strong>, Discrete
								Mathematics, <strong>Web Development</strong>,
								and Computer Architecture. Here I have gained a
								strong foundation in computing, mathematical
								theory of computing, and different programming
								pardigms. I learned the core fundamentals of
								algorithms, data structures, and problem solving
								with the <strong>C</strong> and{' '}
								<strong>Java</strong> programming languages.
								<br />
								<br />
								In the Fall of 2020, I took this full-stack web
								development course where I learned to develop a
								web application using the MERN stack{' '}
								<strong>
									(MongoDB, ExpressJS, ReactJS, and NodeJs)
								</strong>
								.
								<br />
								<br />
								In the Spring of 2020, I took a competitive
								programming course that allowed me to practice
								and improve on my{' '}
								<strong>problem-solving</strong> skills,
								algorithms, and data structures. Online contests
								were used frequently to prepare for the in-class
								contests, such as <strong>CodeForces</strong>,{' '}
								<strong>Google Code Jam</strong>, Kattis, and
								UCF's programming team practice contests.
								<br />
								<br />
								Now I am currently taking a functional
								programming class where I am learning{' '}
								<strong>Haskell</strong> and{' '}
								<strong>Erlang</strong>. I am also starting to
								learn <strong>Data Science</strong> and{' '}
								<strong>Machine Learning</strong> using{' '}
								<strong>Python</strong>
								with its special libraries.
							</p>
						</Col>
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

export default Education;
