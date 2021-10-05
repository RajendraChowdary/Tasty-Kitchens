import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isPasswordVisible: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickShow = () => {
    this.setState({
      isPasswordVisible: true,
    })
  }

  onClickHide = () => {
    this.setState({
      isPasswordVisible: false,
    })
  }

  renderPasswordField = () => {
    const {password, isPasswordVisible} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <div className="password-container">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
          />
          {isPasswordVisible ? (
            <button
              type="button"
              className="eye-button"
              onClick={this.onClickHide}
            >
              <AiFillEyeInvisible className="eye" />
            </button>
          ) : (
            <button
              type="button"
              className="eye-button"
              onClick={this.onClickShow}
            >
              <AiFillEye className="eye" />
            </button>
          )}
        </div>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {showSubmitError, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://res.cloudinary.com/dwyoocqij/image/upload/v1632727627/Vector_ibzmon.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <h1 className="heading">Tasty Kitchens</h1>
          <h1 className="login-heading">Login</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
        <img
          src="https://res.cloudinary.com/dwyoocqij/image/upload/v1632724869/Rectangle_1456_ldoknk.jpg"
          className="login-image"
          alt="website login"
        />
      </div>
    )
  }
}

export default Login
