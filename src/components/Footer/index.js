import './index.css'
import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-heading-container">
      <img
        src="https://res.cloudinary.com/dwyoocqij/image/upload/v1632826066/Vector_zgn3i4.png"
        className="footer-image"
        alt="website-footer-logo"
      />
      <h1 className="footer-heading">Tasty Kitchens</h1>
    </div>
    <p className="footer-description">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="icons-container">
      <FaPinterestSquare
        data-testid="pintrest-social-icon"
        className="footer-icon"
      />
      <FaInstagram
        data-testid="instagram-social-icon"
        className="footer-icon"
      />
      <FaTwitter data-testid="twitter-social-icon" className="footer-icon" />
      <FaFacebookSquare
        data-testid="facebook-social-icon"
        className="footer-icon"
      />
    </div>
  </div>
)

export default Footer
