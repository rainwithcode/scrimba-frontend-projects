import githubIcon from "../assets/icons/github.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";

export default function Footer({ name, github, twitter, facebook, instagram }) {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          className="social-link"
          href={github}
          aria-label={`Open ${name}'s GitHub`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={githubIcon} />
        </a>
        <a
          className="social-link"
          href={twitter}
          aria-label={`Open ${name}'s Twitter`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={twitterIcon} />
        </a>
        <a
          className="social-link"
          href={facebook}
          aria-label={`Open ${name}'s Facebook`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={facebookIcon} />
        </a>
        <a
          className="social-link"
          href={instagram}
          aria-label={`Open ${name}'s Instagram`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icon" src={instagramIcon} />
        </a>
      </div>
    </footer>
  );
}
