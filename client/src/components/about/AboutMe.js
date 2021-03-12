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
							<br />I am a Senior at the University of Central
							Florida majoring in Computer Science. I graduate in
							Summer 2021 and am seeking a Software Engineering
							internship. By obtaining an internship, I hope to
							gain the experience and knowledge necessary to
							provide optimal results at the company I work for in
							my career. I am a very diligent and detail-oriented
							individual that always strives to stay on the
							cutting-edge of technology. I hope to bring these
							qualities to an internship.
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
							in down below and feel free to reach out to me on
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
								href='https://github.com/stefanwerleman'
								target='_blank'
								rel='noopener noreferrer'>
								<GoMarkGithub />
							</a>

							<a
								href='https://www.linkedin.com/in/stefanwerleman'
								target='_blank'
								rel='noopener noreferrer'>
								<FaLinkedin />
							</a>
							<a
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
