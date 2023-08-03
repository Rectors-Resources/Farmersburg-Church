import "./contact.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="firstName">First-Name:</label>
        <input
          type="text"
          name="firstName"
          placeholder="First-Name"
          required
        />
        <br />
        <label htmlFor="lastName">Last-Name:</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last-Name"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="E-Mail"
          name="email"
        />
      </div>
      <div>
        <textarea
          name="comment"
          placeholder="Submit this form with any questions or requests."
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
