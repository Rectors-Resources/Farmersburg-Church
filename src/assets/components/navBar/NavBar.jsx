import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="navdiv">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="upcoming-events" className="link">
        Upcoming Events
      </Link>
      <Link to="sermons" className="link">
        Video Sermons
      </Link>
      <Link to="contact" className="link">
        Contact Us
      </Link>
    </div>
  );
}
