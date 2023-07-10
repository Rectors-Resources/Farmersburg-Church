import "./contact.css";

export default function Contact() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form Submitted!");
      }}
    >
      <label for="first-name">First-Name: </label>
      <input type="text" id="first-name" required />
      <br />
      <label for="last-name">Last-Name: </label>
      <input type="text" id="last-name" required />
      <br />
      <label for="email">E-Mail: </label>
      <input type="text" id="email" />
      <br />
      <h2 id="commenty">Comment:</h2>
      <textarea name="comment" id="" cols='50' rows="20" required></textarea>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
