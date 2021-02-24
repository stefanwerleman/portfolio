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
				<a href={dest} target='_blank' rel='noopener noreferrer'>
					<GoMarkGithub style={styles.githublink} />
				</a>
			);
		}
		dest = link['url'];

		if (dest) {
			return (
				<a href={dest} target='_blank' rel='noopener noreferrer'>
					<GoLinkExternal style={styles.link} />
				</a>
			);
		}

		return null;
	};

	render() {
		const { links, title, description, tools } = this.props.project;
		const toolDict = this.props.tools;

		return (
			<Tilt id='tilt-container' options={{ max: 2.5, scale: 1.07 }}>
				<Container id='card-container' style={styles.container}>
					<Card style={styles.card}>
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
							<Card.Text style={styles.description}>
								{description}
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Card.Title id='bottom-links'>
								{tools.map((tool) => toolDict[tool])}
							</Card.Title>
						</Card.Footer>
					</Card>
				</Container>
			</Tilt>
		);
	}
}

const styles = {
	container: { paddingBottom: 25, height: '100%' },
	card: { backgroundColor: '#E6E9EF', borderWidth: 0, height: '100%' },
	description: { color: '#39689b' },
	githublink: { color: 'black', marginRight: 7 },
	link: { marginRight: 7 },
};

export default Project;
