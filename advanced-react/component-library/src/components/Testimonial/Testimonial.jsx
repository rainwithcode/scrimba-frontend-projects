import "./testimonial.css";
import quotesIcon from "../../assets/quotes-icon.svg";

export default function Testimonial({
  image,
  author,
  role,
  companyLogo,
  children,
}) {
  const testimonialWithImage = (
    <div className="testimonial testimonial--image">
      <img className="testimonial-image" src={image} alt={author} />
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

  return image ? testimonialWithImage : testimonialWithoutImage;
}
