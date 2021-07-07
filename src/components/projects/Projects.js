import React from 'react';
import Project from '../project/Project';
import projectList from '../projectObjects/projectObjects';
import './Projects.css';

class Projects extends React.Component {
	state = {
		projects: projectList,
	};

	render() {
		const { projects } = this.state;

		return (
			<div id='projects' className='sectionContainer'>
				<div className='sectionTitleContainer'>
					<p className='sectionTitle'>Projects</p>
					<hr className='divider' />
				</div>

				<div className='sectionBodyContainer'>
					<p id='project-text'>
						I am always pushing myself to do more projects and learn
						new things. These projects below may or may not have
						their own GitHub repositories because some of these were
						course projects and I do not want to violate academic
						regulations. This list may contain upcoming project
						ideas I have in mind in the near future. Enjoy!
					</p>

					<div id='projects-lists'>
						{projects.map((project) => (
							<Project
								key={project.id}
								project={project}
								tools={this.props.tools}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
