import React from 'react';

import './Skill.css';

class Skill extends React.Component {
	render() {
		const { langs, header, text } = this.props.skill;
		const tools = this.props.tools;

		return (
			<div id='skill'>
				<h3 id='skill-icons'>{langs.map((lang) => tools[lang])}</h3>
				<h5 id='skill-sub'>
					<strong>{header}</strong>
				</h5>

				<p id='skill-text'>{text}</p>
			</div>
		);
	}
}

export default Skill;
