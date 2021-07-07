import React from 'react';
import { Image } from 'react-bootstrap';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link } from 'react-scroll';
import Img from './profile-pic.png';
import './AboutMe.css';

class AboutMe extends React.Component {
	render() {
		return (
			<div id='about' className='sectionContainer'>
				<div className='sectionTitleContainer'>
					<p className='sectionTitle'>About Me</p>
					<hr className='divider' />
				</div>

				<div id='about-body' className='sectionBodyContainer'>
					<Image
						id='profile-pic'
						src={Img}
						alt='Profile Picture'
						rounded></Image>

					<div id='bio'>
						<p id='about-text'>
							<strong>Hello,</strong>
							<br />
							<br />I am an incoming graduate student at the University of Central
							Florida majoring in Computer Science. I graduate in
							August 2022 and am seeking a Software Engineering
							entry-level or internship position. I enjoy solving complex problems and turning
							them into software that can help others. I am always striving to stay on the cutting-edge of technology by learning 
							about the latest discoveries in Computer Science. 
							<br />
							<br />
							If you are interested, you can view some of my{' '}
							<strong>
								<a href='#/projects'>
									<Link
										to='projects'
										smooth={true}
										duration={1000}>
										projects
									</Link>
								</a>
							</strong>{' '}
							down below and feel free to reach out to me on
							LinkedIn or send me an{' '}
							<strong>
								<a href='#/contact'>
									<Link
										to='contact'
										smooth={true}
										duration={1000}>
										email
									</Link>
								</a>
							</strong>
							.
						</p>
						<h3 id='links'>
							<a
								className='link'
								href='https://github.com/stefanwerleman'
								target='_blank'
								rel='noopener noreferrer'>
								<GoMarkGithub />
							</a>

							<a
								className='link'
								href='https://www.linkedin.com/in/stefanwerleman'
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin />
							</a>
							<a
								className='link'
								href='#/contact'
								target='_blank'
								rel='noopener noreferrer'>
								<Link
									to='contact'
									smooth={true}
									duration={1000}>
									<IoMdMail />
								</Link>
							</a>
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;
