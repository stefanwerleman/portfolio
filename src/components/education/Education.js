import React from 'react';
import './Education.css';

// Child Component(s)
import School from '../school/School';

// School list
import schools from '../schoolList/schoolList';

// TODO: Include FLit-Path Organization in here.
class Education extends React.Component {
	render() {
		return (
			<div id='education' className='sectionContainer'>
				<div className='sectionTitleContainer'>
					<p className='sectionTitle'>Education</p>
					<hr className='divider' />
				</div>

				<div className='sectionBodyContainer'>
					{schools.map((school, index) => {
						if (index === 0) {
							return (
								<div className='schoolWorkBody'>
									<School key={school.id} school={school} />
									<hr id='school-divider' />
								</div>
							);
						} else if (index !== schools.length - 1) {
							return (
								<div className='schoolWorkBody'>
									<School key={school.id} school={school} />
									<hr id='school-divider' />
								</div>
							);
						} else {
							return <School key={school.id} school={school} />;
						}
					})}
				</div>
			</div>
		);
	}
}

export default Education;
