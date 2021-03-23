import React from 'react';
import './Experience.css';

// Child Component
import Job from '../job/Job';

// Job List
import jobs from '../jobList/jobList';

class Experience extends React.Component {
	render() {
		return (
			<div id='experience' className='sectionContainer'>
				<div className='sectionTitleContainer'>
					<p className='sectionTitle'>Experience</p>
					<hr className='divider' />
				</div>

				<div className='sectionBodyContainer'>
					{jobs.map((job, index) => {
						if (index === 0) {
							return (
								<div>
									<Job key={job.id} job={job} />
									<hr id='job-divider' />
								</div>
							);
						} else if (index !== jobs.length - 1) {
							return (
								<div>
									<Job key={job.id} job={job} />
									<hr id='job-divider' />
								</div>
							);
						} else {
							return <Job key={job.id} job={job} />;
						}
					})}
				</div>
			</div>
		);
	}
}

export default Experience;
