import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Front.css';

class Front extends React.Component {
	render() {
		return (
			<div id='front'>
				<div id='front-container'>
					<p id='name-container'>STEFAN WERLEMAN</p>
					<hr id='front-divider' />

					<p id='front-sub'>COMPUTER SCIENCE STUDENT AT UCF</p>
				</div>
			</div>
		);
	}
}

export default Front;
