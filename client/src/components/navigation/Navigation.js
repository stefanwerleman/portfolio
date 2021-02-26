import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Resume from './Resume.pdf';
import './Navigation.css';

import { FiMenu } from 'react-icons/fi';

import { Link } from 'react-scroll';

class Navigation extends React.Component {
	render() {
		return (
			<Navbar id='navigation' variant='dark'>
				<Nav id='nav-links'>
					<Nav.Link id='menu'>
						<FiMenu id='menu-icon' />
					</Nav.Link>
					<Nav.Link>
						<Link to='about' smooth={true} duration={1000}>
							About
						</Link>
					</Nav.Link>
					<Nav.Link>
						{' '}
						<Link to='skills' smooth={true} duration={1000}>
							Skills
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to='projects' smooth={true} duration={1000}>
							Projects
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to='education' smooth={true} duration={1000}>
							Education
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to='experience' smooth={true} duration={1000}>
							Experience
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to='contact' smooth={true} duration={1000}>
							Contact
						</Link>
					</Nav.Link>

					<Button
						variant='outline-light'
						href={Resume}
						target='_blank'>
						Resume
					</Button>
				</Nav>
			</Navbar>
		);
	}
}

export default Navigation;
