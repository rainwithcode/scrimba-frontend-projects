import "./testimonial.css";
import quotesIcon from "../../assets/quotes-icon.svg";

export default function Testimonial({
  imageMobile,
  imageDesktop,
  author = "Jane Doe",
  role = "Amazon, CTO",
  companyLogo,
  children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}) {
  const testimonialWithImage = (
    <div className="testimonial testimonial--image">
      <picture>
        {imageMobile && (
          <source srcSet={imageMobile} media="(max-width: 815px)" />
        )}
        <img
          className="testimonial-image"
          src={imageDesktop}
          alt={author}
          loading="lazy"
        />
      </picture>
      <div className="testimonial-content">
        <img
          className="testimonial-quotes"
          src={quotesIcon}
          alt=""
          aria-hidden="true"
        />
        <p className="testimonial-text">{children}</p>
        <div className="testimonial-author">{author}</div>
        <div className="testimonial-role">{role}</div>
      </div>
    </div>
  );

  return imageDesktop ? testimonialWithImage : testimonialWithoutImage;
}
