import React from 'react';
import { Container, Row } from 'react-bootstrap';

// import './Skill.css';

class Skill extends React.Component {
	render() {
		const { langs, header, text } = this.props.skill;
		const tools = this.props.tools;

		return (
			<div id='skill'>
				<Container id='skill-container' fluid>
					<Row>
						<h3 id='skill-icons'>
							{langs.map((lang) => tools[lang])}
						</h3>
					</Row>
					<Row>
						<h5 id='skill-sub'>
							<strong>{header}</strong>
						</h5>
					</Row>
					<Row>
						<p id='skill-text'>{text}</p>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Skill;
