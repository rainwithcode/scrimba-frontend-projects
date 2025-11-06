import emailIcon from "../assets/icons/email.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

export default function Info({ avatar, name, website, email, linkedin }) {
  return (
    <header className="card-info">
      <img className="avatar" src={avatar} alt={`${name}'s avatar`} />
      <h1 className="name">Rain Kalugdan</h1>
      <p className="role">Frontend Developer</p>
      <a
        className="website-link"
        href={website}
        aria-label={`Open ${name}'s website`}
        target="_blank"
        rel="noopener noreferrer"
      >
        rainkalugdan.website
      </a>
      <div className="social-links">
        <a
          className="social-link"
          href={`mailto:${email}`}
          aria-label={`Send ${name} an email`}
        >
          <img className="social-icon" src={emailIcon} alt="" />
          <span>Email</span>
        </a>
        <a href={linkedin}>
          <img
            className="social-icon"
            src={linkedinIcon}
            aria-label={`Visit ${name}'s Linkedin`}
          ></img>
          <span>Linkedin</span>
        </a>
      </div>
    </header>
  );
}
