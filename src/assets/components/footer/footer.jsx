import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <p>Feel free to <Link to='contact'>contact us</Link>!</p>
      <p>(812) 268-5800</p>
      <p>201 N Main St, Sullivan, IN 47882</p>
      <p>church@gmail.com</p>
    </footer>
  );
}
