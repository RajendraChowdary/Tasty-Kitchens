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
      </div>
    </nav>
  )
}

export default withRouter(Header)
