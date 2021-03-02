import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Resume from './Resume.pdf';
import './Navigation.css';

import { FiMenu } from 'react-icons/fi';

// Child Components
import NavMenu from '../navmenu/NavMenu';

function Navigation() {
	const [active, setActive] = useState(false);

	const toggleMenu = () => {
		setActive(!active);
	};

	return (
		<Navbar id='navigation' variant='dark'>
			<Nav id='nav-links'>
				<Nav.Link id='menu' onClick={toggleMenu}>
					<FiMenu id='menu-icon' />
				</Nav.Link>
				<NavMenu />
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
