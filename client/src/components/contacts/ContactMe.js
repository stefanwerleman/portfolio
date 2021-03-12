import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './ContactMe.css';

// const axios = require("axios");

// Child Components
import Contact from '../contact/Contact';

// list of contacts
import contacts from '../contactList/contactList';

class ContactMe extends React.Component {
	// NOTE: Will put up form later
	// handleEmail = (event) => {
	//     const { URL } = this.props;

	//     let newEmail = {
	//         name: event.name,
	//         email: event.email,
	//         message: event.message,
	//     };

	//     axios
	//         .post(URL + "/email", newEmail)
	//         .then((res) => {
	//             if (res.status !== 200) {
	//                 event.preventDefault();
	//             }
	//             const emailForm = document.forms["form-container"];
	//             emailForm.reset();
	//             console.log("Email sent");
	//             console.log(res);
	//         })
	//         .catch((error) => {
	//             console.log(error);
	//         });
	// };

	// schema = Yup.object({
	//     name: Yup.string().required("Please provide a name."),
	//     email: Yup.string().required("Please provide a valid email address."),
	//     message: Yup.string().required("Please provide a message."),
	// });

	// emailForm = () => (
	//     <Formik
	//         id="formik-container"
	//         validationSchema={this.schema}
	//         onSubmit={this.handleEmail}
	//         initialValues={{ name: "", email: "", message: "" }}
	//     >
	//         {({ handleSubmit, errors, handleChange }) => (
	//             <Form id="form-container" onSubmit={handleSubmit} noValidate>
	//                 <Form.Row>
	//                     <Form.Group id="name-group" as={Col}>
	//                         <Form.Control
	//                             id="name-input"
	//                             type="text"
	//                             name="name"
	//                             placeholder="Name"
	//                             onChange={handleChange}
	//                             isInvalid={!!errors.name}
	//                         ></Form.Control>
	//                         <Form.Control.Feedback type="invalid" tooltip>
	//                             {errors.name}
	//                         </Form.Control.Feedback>
	//                     </Form.Group>
	//                 </Form.Row>
	//                 <Form.Row>
	//                     <Form.Group id="email-group" as={Col}>
	//                         <Form.Control
	//                             id="email-input"
	//                             type="email"
	//                             name="email"
	//                             placeholder="Email"
	//                             onChange={handleChange}
	//                             isInvalid={!!errors.name}
	//                         ></Form.Control>
	//                         <Form.Control.Feedback type="invalid" tooltip>
	//                             {errors.email}
	//                         </Form.Control.Feedback>
	//                     </Form.Group>
	//                 </Form.Row>
	//                 <Form.Row>
	//                     <Form.Group id="message-group" as={Col}>
	//                         <Form.Control
	//                             id="message-input"
	//                             name="message"
	//                             as="textarea"
	//                             rows="8"
	//                             placeholder="Message"
	//                             onChange={handleChange}
	//                             isInvalid={!!errors.message}
	//                         ></Form.Control>
	//                         <Form.Control.Feedback type="invalid" tooltip>
	//                             {errors.message}
	//                         </Form.Control.Feedback>
	//                     </Form.Group>
	//                 </Form.Row>
	//                 <Form.Row
	//                     id="button-row"
	//                     className="justify-content-sm-center"
	//                 >
	//                     <Form.Group>
	//                         <Button
	//                             id="send-button"
	//                             type="submit"
	//                             variant="info"
	//                         >
	//                             Send
	//                         </Button>
	//                     </Form.Group>
	//                 </Form.Row>
	//             </Form>
	//         )}
	//     </Formik>
	// );

	render() {
		return (
			<div id='contact' className='sectionContainer'>
				<div className='sectionTitleContainer'>
					<p className='sectionTitle'>Contact Me</p>
					<hr className='divider' />
				</div>

				<div className='sectionBodyContainer'>
					<p id='contact-text'>
						If you are looking for a Software Engineer for an
						internship position, feel free to drop me an email and I
						will get back to you as soon as possible.
					</p>
					<div id='contact-list'>
						{contacts.map((contact, index) => {
							if (index === 0) {
								return (
									<div className='contact-object'>
										<Contact
											key={contact.id}
											contact={contact}
										/>
										<hr id='contact-divider' />
									</div>
								);
							} else if (index !== contacts.length - 1) {
								return (
									<div className='contact-object'>
										<Contact
											key={contact.id}
											contact={contact}
										/>
										<hr id='contact-divider' />
									</div>
								);
							} else {
								return (
									<Contact
										key={contact.id}
										contact={contact}
									/>
								);
							}
						})}
					</div>

					{/*
                    NOTE: Will put up form later
                    <br />
                     <Row id="email-row" className="justify-content-sm-center">
                        { {this.emailForm()} }
                    </Row> */}
				</div>
			</div>
		);
	}
}

export default ContactMe;
