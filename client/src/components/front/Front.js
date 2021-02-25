import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './Front.css';

class Front extends React.Component {
	render() {
		return (
			<div id='front'>
				<h1 id='name' className='display-3'>
					<strong>STEFAN WERLEMAN</strong>
					<hr />
				</h1>

				<h4 id='sub'>COMPUTER SCIENCE STUDENT AT UCF</h4>
			</div>
		);
	}
}

export default Front;
