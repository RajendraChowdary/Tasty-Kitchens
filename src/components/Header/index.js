import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  const {activeTab} = props
  const activeHome = activeTab === 'HOME' ? 'active' : ''
  const activeCart = activeTab === 'CART' ? 'active' : ''

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dwyoocqij/image/upload/v1632727627/Vector_ibzmon.png"
            alt="website logo"
          />
        </Link>
        <Link to="/" className="heading-link">
          <h1 className="heading">Tasty Kitchens</h1>
        </Link>
        <ul className="nav-menu">
          <Link to="/" className={`nav-link ${activeHome}`}>
            <li>Home</li>
          </Link>
          <Link to="/cart" className={`nav-link ${activeCart}`}>
            <li>Cart</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/cart">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
