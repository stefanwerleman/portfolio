import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Resume from './Resume.pdf';
import './Navigation.css';
import { Link } from 'react-scroll';

import { FiMenu } from 'react-icons/fi';

function Navigation() {
	const [active, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!active);
	};

	return (
		<Navbar id='navigation' variant='dark'>
			<Nav className={active ? 'nav-links responsive' : 'nav-links'}>
				<Nav.Link id='menu' onClick={toggleMenu}>
					<FiMenu id='menu-icon' />
				</Nav.Link>
				<div className={active ? 'nav-list responsive' : 'nav-list'}>
					<Nav.Link className='links'>
						<Link to='about' smooth={true} duration={1000}>
							About
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link to='skills' smooth={true} duration={1000}>
							Skills
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link to='projects' smooth={true} duration={1000}>
							Projects
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link to='education' smooth={true} duration={1000}>
							Education
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link to='experience' smooth={true} duration={1000}>
							Experience
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link to='contact' smooth={true} duration={1000}>
							Contact
						</Link>
					</Nav.Link>
				</div>
				<Button
					id='resume-button'
					variant='outline-light'
					href={Resume}
					target='_blank'>
					Resume
				</Button>
			</Nav>
		</Navbar>
	);
}

export default Navigation;
