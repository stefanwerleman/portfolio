import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Resume from './swresume.pdf';
import './Navigation.css';
import { Link } from 'react-scroll';

import { FiMenu } from 'react-icons/fi';

function Navigation() {
	const [active, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!active);
	};

	const handleLink = () => {
		setActive(false);
	};

	return (
		<Navbar id='navigation' variant='dark'>
			<Nav className={active ? 'nav-links responsive' : 'nav-links'}>
				<div>
					<Nav.Link id='menu' onClick={toggleMenu}>
						<FiMenu id='menu-icon' />
					</Nav.Link>
				</div>
				<div className={active ? 'menu-list responsive' : 'menu-list'}>
					<Nav.Link className='links'>
						<Link
							to='about'
							smooth={true}
							duration={1000}
							onClick={handleLink}>
							About
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link
							to='skills'
							smooth={true}
							duration={1000}
							onClick={handleLink}>
							Skills
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link
							to='projects'
							smooth={true}
							duration={1000}
							onClick={handleLink}>
							Projects
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link
							to='education'
							smooth={true}
							duration={1000}
							onClick={handleLink}>
							Education
						</Link>
					</Nav.Link>
					<Nav.Link className='links'>
						<Link
							to='experience'
							smooth={true}
							duration={1000}
							onClick={handleLink}>
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
