import { useState } from "react";
import "./contact.css";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setFormData((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="firstName">First-Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="First-Name"
          onChange={handleOnChange}
          required
        />
        <br />
        <label htmlFor="lastName">Last-Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last-Name"
          onChange={handleOnChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={handleOnChange}
          placeholder="E-Mail"
          name="email"
        />
      </div>
      <div>
        <textarea
          name="comment"
          placeholder="Submit this form with any questions or requests."
          onChange={handleOnChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
