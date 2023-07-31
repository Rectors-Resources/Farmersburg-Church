import "./contact.css";

export default function Contact() {
  const handleSubmit = (event) => {

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={handleSubmit} name="contact">
      <input type="hidden" name="contact" value="contact" />
      <div>
        <label htmlFor="first-name">First-Name:</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First-Name"
          required
        />
        <br />
        <label htmlFor="last-name">Last-Name:</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          placeholder="Last-Name"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="E-Mail" name="email" />
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
