import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="banner">
        <h1 className="welcome">Welcome to the First Presbyterian Church of Farmersburg.</h1>
      </div>
      <article className='img-container'>
        <h2 className="event-thang">
          Join our community and enjoy splendid events fun for the whole family
        </h2>
        <img
          src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/201201179_1131615280657546_1714901202748511283_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=b9115d&_nc_ohc=IHcsT6qpjy0AX90NeFu&_nc_oc=AQksKi_-Jqx6RjkNyQ2yTvB4-sGr17X9IrZsUKUZt5tVt4dHI6RpYD8-oDgftYCVFa9gGeA_wfOMi8cVK6YBkyBa&_nc_ht=scontent-ord5-1.xx&oh=00_AfDTaLGvgDSCp3E__vs5F4qnSvpawiJdqB7JNwl04FbsEA&oe=64D149DC"
          alt="church members eating"
          className="communityimg"
        />
        <img
          src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/216970678_1145106522641755_7913531573496355924_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=b9115d&_nc_ohc=tmB8q4upGy0AX_NVAqT&_nc_ht=scontent-ord5-2.xx&oh=00_AfCCvia7BWj2laeWqPIQ-X_ECaDeh24rbr1CvmwaoCVn2Q&oe=64AFB37B"
          alt="church members playing corn hole"
          className="communityimg"
        />
        <img
          src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/197745842_1131614843990923_5872467213051793574_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=b9115d&_nc_ohc=v1iUrncQ7gIAX9jB8_u&_nc_ht=scontent-ord5-2.xx&oh=00_AfCKkYsgGOrVIQZrS5jKVp3PRhPDrFxsChcLmGO74dMmwA&oe=64D16083"
          alt="church members eating"
          className="communityimg"
        />
        <p>See our upcoming events <Link to='upcoming-events'>here</Link>.</p>
      </article>
      <article className="about">
        <h2>About Us:</h2>
        <p>
          We are a Presbyterian denominated church founded in Farmersburg,
          Indiana in 1924. Sermons are held every sunday by pastor John Turner and/or
          any guest speakers. We are open for wedding services and hosting of
          parties. If you have any questions or would like to reserve a service
          feel free to contact us from our{" "}
          <Link to="contact">contact page</Link>.
        </p>
      </article>
    </div>
  );
}
