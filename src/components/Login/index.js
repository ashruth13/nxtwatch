import {Component} from 'react'
import Cookies from 'js-cookie'
import WatchContext from '../../context/WatchContext'
import {Mainmain, MainLogin, LoginLabel, LoginInput} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPass: false,
    showError: false,
    error: '',
  }

  user = event => {
    this.setState({username: event.target.value})
  }

  pass = event => {
    this.setState({password: event.target.value})
  }

  toggle = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}))
  }

  onOk = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  notOk = error => {
    this.setState({showError: true, error})
  }

  submit = async event => {
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
    if (response.ok) {
      this.onOk(data.jwt_token)
    } else {
      this.notOk(data.error_msg)
    }
  }

  render() {
    const {error, showError, showPass} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {dark} = value
          return (
            <Mainmain dark={dark}>
              <MainLogin dark={dark}>
                <div className="login-img-div">
                  <img
                    className="login-img"
                    src={
                      dark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="logo"
                  />
                </div>
                <form onSubmit={this.submit}>
                  <LoginLabel dark={dark} htmlFor="fi">
                    USERNAME
                  </LoginLabel>
                  <br />
                  <LoginInput
                    onChange={this.user}
                    dark={dark}
                    className="login-input mar-in"
                    placeholder="Username"
                    id="fi"
                  />
                  <br />
                  <LoginLabel dark={dark} htmlFor="si">
                    PASSWORD
                  </LoginLabel>
                  <br />
                  <LoginInput
                    onChange={this.pass}
                    type={showPass ? 'text' : 'password'}
                    dark={dark}
                    placeholder="Password"
                    className="login-input"
                    id="si"
                  />
                  <br />
                  <div className="show-login">
                    <input onChange={this.toggle} id="ti" type="checkbox" />
                    <LoginLabel htmlFor="ti" dark={dark}>
                      Show Password
                    </LoginLabel>
                  </div>
                  <br />
                  <button className="login-button" type="submit">
                    Login
                  </button>
                  {showError && <p className="login-p">*{error}</p>}
                </form>
              </MainLogin>
            </Mainmain>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login
