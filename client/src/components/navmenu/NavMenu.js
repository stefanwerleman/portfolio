import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './NavMenu.css';

function NavMenu() {
	return (
		<div className='nav-list'>
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
	);
}

export default NavMenu;
