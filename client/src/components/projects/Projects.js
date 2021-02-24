import React from 'react';
import {
	Container,
	Row,
	Col,
	Button,
	Collapse,
	ButtonGroup,
} from 'react-bootstrap';
import Project from '../project/Project';
import projectList from '../projectObjects/projectObjects';
import './Projects.css';

class Projects extends React.Component {
	state = {
		projects: projectList,
		isExpanded: false,
	};

	handleExpand = () => {
		this.setState({ isExpanded: true });
	};

	handleCollapse = () => {
		this.setState({ isExpanded: false });
	};

	toggleButton = (isExpanded) => {
		if (!isExpanded) {
			return (
				<Button
					className='project-button'
					variant='primary'
					onClick={this.handleExpand}>
					Show More
				</Button>
			);
		} else {
			return (
				<Button
					className='project-button'
					variant='outline-primary'
					onClick={this.handleCollapse}>
					Show Less
				</Button>
			);
		}
	};

	getOtherProjects = (projects) => {
		const otherProjects = projects.filter((project) => project.number > 2);
		return otherProjects;
	};

	render() {
		const { isExpanded, projects } = this.state;

		const otherProjects = this.getOtherProjects(projects);

		return (
			<div id='projects'>
				<Container id='projects-container' fluid>
					<Row id='title-row' className='justify-content-md-center'>
						<Col id='projects-title-container' md='auto'>
							<p className='display-4'>Projects</p>
							<hr style={styles.mainLine} />
						</Col>
					</Row>
					<Row id='text-row' className='justify-content-md-center'>
						<Col md='auto'>
							<p id='project-text'>
								I am always pushing myself to do more projects
								and learn new things. These projects below may
								or may not have their own GitHub repositories
								because some of these were course projects and I
								don't want to violate academic regulations. This
								list may contain upcoming project ideas I have
								in mind in the near future. Enjoy!
							</p>
							<br />
						</Col>
					</Row>
					<Row id='project-row' xl={3} lg={2} sm={1}>
						<Project
							key={projects[0].id}
							project={projects[0]}
							tools={this.props.tools}
						/>
						<Project
							key={projects[1].id}
							project={projects[1]}
							tools={this.props.tools}
						/>
						<Project
							key={projects[2].id}
							project={projects[2]}
							tools={this.props.tools}
						/>
					</Row>
					<Collapse id='projects-collapse' in={isExpanded}>
						<Row
							id='more-projects-row'
							xl={3}
							lg={2}
							sm={1}
							className='justify-content-md-center'
							style={{ paddingBottom: 75 }}>
							{otherProjects.map((project) => (
								<Project
									key={project.id}
									project={project}
									tools={this.props.tools}
								/>
							))}
						</Row>
					</Collapse>
					<Row id='button-row' className='justify-content-sm-center'>
						<ButtonGroup id='button-container' bsPrefix='btn-group'>
							{this.toggleButton(isExpanded)}
						</ButtonGroup>
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

export default Projects;
