import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillList from '../skillList/skillList';
import Skill from '../skill/Skill';
// import './Skills.css';

class Skills extends React.Component {
	state = {
		skills: SkillList,
	};

	render() {
		const { skills } = this.state;

		return (
			<div id='skills'>
				<p id='skills-title' className='display-4'>
					Skills
				</p>
				<hr />

				<p id='skills-text'>
					I know six programming languages and have used them to
					implement algorithms and data structures and develop web and
					mobile applications. I have used various APIs and
					frameworks, such as{' '}
					<a
						href='https://www.shipengine.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<strong>Ship Engine</strong>
					</a>
					,{' '}
					<a
						href='https://developers.google.com/books'
						target='_blank'
						rel='noopener noreferrer'>
						<strong>Books API</strong>
					</a>
					,{' '}
					<a
						href='https://sendgrid.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<strong>SendGrid</strong>
					</a>
					,{' '}
					<a
						href='https://getbootstrap.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<strong>Bootstrap</strong>
					</a>
					, and{' '}
					<a
						href='https://material-ui.com/'
						target='_blank'
						rel='noopener noreferrer'>
						<strong>Material UI</strong>
					</a>
					, to enhance all my applications.
				</p>

				{skills.map((skill) => (
					<Skill
						key={skill.id}
						skill={skill}
						tools={this.props.tools}
					/>
				))}
			</div>
		);
	}
}

export default Skills;
