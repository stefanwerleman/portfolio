import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { ImFolderOpen } from 'react-icons/im';
import { GoMarkGithub, GoLinkExternal } from 'react-icons/go';
import Tilt from 'react-tilt';
import './Project.css';

class Project extends React.Component {
	getLink = (link) => {
		let dest = link['github'];

		if (dest) {
			return (
				<a
					className='topLink'
					href={dest}
					target='_blank'
					rel='noopener noreferrer'>
					<GoMarkGithub />
				</a>
			);
		}
		dest = link['url'];

		if (dest) {
			return (
				<a
					className='topLink'
					href={dest}
					target='_blank'
					rel='noopener noreferrer'>
					<GoLinkExternal />
				</a>
			);
		}

		return null;
	};

	render() {
		const { links, title, description, tools } = this.props.project;
		const toolDict = this.props.tools;

		return (
			<div id='project'>
				<Tilt id='tilt-container' options={{ max: 2.5, scale: 1.07 }}>
					<Card id='card-container'>
						<Card.Body id='card-body'>
							<Card.Title id='top-links' className='d-flex'>
								<ImFolderOpen
									id='folder-icon'
									className='mr-auto'
								/>

								{links.map((link) => this.getLink(link))}
							</Card.Title>

							<Card.Subtitle id='card-title'>
								{title}
							</Card.Subtitle>
							<Card.Text id='card-text'>{description}</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Card.Title id='bottom-links'>
								{tools.map((tool) => toolDict[tool])}
							</Card.Title>
						</Card.Footer>
					</Card>
				</Tilt>
			</div>
		);
	}
}

export default Project;
