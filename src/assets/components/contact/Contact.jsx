import "./contact.css";

export default function Contact() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form Submitted!");
      }}
    >
      <div>
        <input type="text" id="first-name" placeholder="First-Name" required />
        <br />
        <input type="text" id="last-name" placeholder="Last-Name" required />
        <br />
        <input type="text" id="email" placeholder="E-Mail" />
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
