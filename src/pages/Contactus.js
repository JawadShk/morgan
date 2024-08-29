// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
// import { FaBuilding, FaPhoneSquare, FaEnvelope } from "react-icons/fa";
// import emailjs from "emailjs-com";

// const Contactus = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     city: "",
//     message: "",
//     verification: "",
//   });

//   const [loading, setLoading] = useState(false); // State to manage spinner visibility

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true); // Show spinner when form is submitted

//     emailjs
//       .sendForm(
//         "service_rfy73ng", // Replace with your EmailJS service ID
//         "template_7eo8axp", // Replace with your EmailJS template ID
//         e.target, // The form element (or you can pass the form data manually)
//         "7S6IZ1p3s46LEI_K_" // Replace with your EmailJS user ID
//       )
//       .then(
//         (result) => {
//           setLoading(false); // Hide spinner when response is received
//           console.log(result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           setLoading(false); // Hide spinner when error occurs
//           console.log(error.text);
//           alert("Failed to send the message, please try again.");
//         }
//       );
//   };

//   return (
//     <div>
//       <section className="jumbotron-banner bg-light text-center py-5">
//         <Container>
//           <Row>
//             <Col>
//               <h1>Contact</h1>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="contact-form py-5">
//         <Container>
//           <Row>
//             <Col md={6}>
//               <h2 className="heading-2">Get in Touch</h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email Address"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicMobileNumber">
//                   <Form.Control
//                     type="number"
//                     name="mobile"
//                     placeholder="Enter Mobile Number"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicCity">
//                   <Form.Control
//                     type="text"
//                     name="city"
//                     placeholder="Your City"
//                     value={formData.city}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Form.Group
//                   controlId="floatingTextarea"
//                   label="Comments"
//                   className="mb-3"
//                 >
//                   <Form.Control
//                     as="textarea"
//                     name="message"
//                     placeholder="Your Message"
//                     style={{ height: "100px" }}
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <p>
//                   Verify you're a human - Please enter the following code in the
//                   box below: 7102
//                 </p>

//                 <Form.Group className="mb-3" controlId="formVerifyHuman">
//                   <Form.Control
//                     type="text"
//                     name="verification"
//                     value={formData.verification}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>

//                 <Button className="button" variant="primary" type="submit" disabled={loading}>
//                   {loading ? (
//                     <Spinner
//                       as="span"
//                       animation="border"
//                       size="sm"
//                       role="status"
//                       aria-hidden="true"
//                     />
//                   ) : (
//                     "Send Message"
//                   )}
//                 </Button>
//               </Form>
//             </Col>
//             <Col md={6}>
//               <h2 className="heading-2">Our Address</h2>
//               <ul className="list-unstyled">
//                 <li className="mb-3">
//                   <FaBuilding /> 2130 Fulton Street, San Diego, CA 94117-1080
//                   USA
//                 </li>
//                 <li className="mb-3">
//                   <FaPhoneSquare /> 1-800-1234-567
//                 </li>
//                 <li className="mb-3">
//                   <FaEnvelope /> info@demolink.org
//                 </li>
//               </ul>
//               <div>
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6708.174193320493!2d-117.17270355368021!3d32.789949813974864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d955516221f3ef%3A0xa10590ef3f2cee7e!2sgcaeo!5e0!3m2!1sen!2sin!4v1724844460710!5m2!1sen!2sin"
//                   width="100%"
//                   height="400px"
//                   id="gmap_canvas"
//                   allowfullscreen=""
//                   loading="lazy"
//                   referrerpolicy="no-referrer-when-downgrade"
//                   frameBorder="0"
//                   scrolling="no"
//                   marginHeight="0"
//                   marginWidth="0"
//                 ></iframe>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Contactus;

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { FaBuilding, FaPhoneSquare, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    message: "",
    verification: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValidated, setFormValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!formData.city) {
      newErrors.city = "City is required.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    }
    if (formData.verification !== "7102") {
      newErrors.verification = "Verification code is incorrect.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setFormValidated(true);

    emailjs
      .sendForm(
        "service_rfy73ng", // Replace with your EmailJS service ID
        "template_7eo8axp", // Replace with your EmailJS template ID
        e.target, // The form element (or you can pass the form data manually)
        "7S6IZ1p3s46LEI_K_" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            mobile: "",
            city: "",
            message: "",
            verification: "",
          });
          setFormValidated(false);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div>
      <section className="jumbotron-banner bg-light text-center py-5">
        <Container>
          <Row>
            <Col>
              <h1>Contact</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-form py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-md-0 mb-5">
              <h2 className="heading-2">Get in Touch</h2>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Enter Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    isInvalid={!!errors.mobile}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobile}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Your City"
                    value={formData.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="floatingTextarea" className="mb-3">
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                    style={{ height: "100px" }}
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <p>
                  Verify you're a human - Please enter the following code in the
                  box below: 7102
                </p>

                <Form.Group className="mb-3" controlId="formVerifyHuman">
                  <Form.Control
                    type="text"
                    name="verification"
                    value={formData.verification}
                    onChange={handleChange}
                    isInvalid={!!errors.verification}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.verification}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  className="button"
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Form>
              {formValidated && (
                <Alert variant="success" className="mt-3">
                  Form submitted successfully!
                </Alert>
              )}
            </Col>
            <Col md={6}>
              <h2 className="heading-2">Our Address</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaBuilding /> 2130 Fulton Street, San Diego, CA 94117-1080
                  USA
                </li>
                <li className="mb-3">
                  <FaPhoneSquare /> 1-800-1234-567
                </li>
                <li className="mb-3">
                  <FaEnvelope /> info@demolink.org
                </li>
              </ul>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6708.174193320493!2d-117.17270355368021!3d32.789949813974864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d955516221f3ef%3A0xa10590ef3f2cee7e!2sgcaeo!5e0!3m2!1sen!2sin!4v1724844460710!5m2!1sen!2sin"
                  width="100%"
                  height="400px"
                  id="gmap_canvas"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contactus;
