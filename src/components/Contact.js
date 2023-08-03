import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reference to the form element
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the JSON server using fetch POST

    fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form data submitted:', data);
        setIsSubmitted(true); // Set isSubmitted to true after successful submission
        formRef.current.reset(); // Reset the form fields using form.reset()
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
        
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p style={{textAlign: 'center'}}>Your form has been submitted!</p>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
