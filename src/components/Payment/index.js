import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Payment = () => (
  <>
    <Header activeTab="CART" />
    <div className="payment-container">
      <img
        src="https://res.cloudinary.com/dwyoocqij/image/upload/v1632984646/Vector_1_zcznkz.png"
        alt="success"
      />
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="payment-description">
        Thank you for ordering Your payment is successfully completed.
      </p>

      <Link to="/">
        <button className="go-to-home-button" type="button">
          Go To Home Page
        </button>
      </Link>
    </div>
  </>
)

export default Payment
