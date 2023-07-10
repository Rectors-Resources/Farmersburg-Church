import "./sermons.css";

export default function Sermons() {
  return (
    <section>
      <h2 className="top-text">
        Sermons are held every sunday at 10:00 A.M. by pastor John Turner.
      </h2>
      <h3 className="top-text">Recent Sermons: </h3>
      <div className="video-box">
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/NCtzkaL2t_Y"
          title="The Beatles - Don&#39;t Let Me Down"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/45cYwDMibGo"
          title="The Beatles - Come Together"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/HtUH9z_Oey8"
          title="The Beatles - Strawberry Fields Forever"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/UelDrZ1aFeY"
          title="The Beatles - Something"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/2Q_ZzBGPdqE"
          title="The Beatles - Help!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="videos"
          src="https://www.youtube.com/embed/bI8P6ZSHSvE"
          title="While My Guitar Gently Weeps (Remastered 2009)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="top-text">
        More Sermons hosted on youtube{" "}
        <a
          href="https://www.youtube.com/channel/UCc4K7bAqpdBP8jh1j9XZAww"
          target="blank"
        >
          here
        </a>
        .
      </p>
    </section>
  );
}
