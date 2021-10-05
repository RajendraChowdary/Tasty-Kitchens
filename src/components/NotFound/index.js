import './index.css'

import {Link} from 'react-router-dom'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header activeTab="CART" />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dwyoocqij/image/upload/v1632824731/erroring_1_uhawua.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button className="home-page-button" type="button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
