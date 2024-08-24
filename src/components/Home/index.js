import {Component} from 'react'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {BsMoon, BsBrightnessHigh, BsDot} from 'react-icons/bs'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {IoLogoLinkedin, IoIosSearch} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {
  formatDistanceToNowStrict,
  parse,
  getMonth,
  getYear,
  getDate,
} from 'date-fns'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {Link} from 'react-router-dom'
import WatchContext from '../../context/WatchContext'

import {
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  Content,
  MainHead,
  BtnHead,
  FirstHead,
  SecondHead,
  NavItems,
  NavP,
  Card,
  Extra,
  MainHome,
} from './styledComponents'
import './index.css'

class Home extends Component {
  state = {
    input: '',
    searchInput: '',
    videos: [],
    logout: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  year = value => {
    const parsedDate = parse(value, 'MMM dd, yyyy', new Date())
    return getYear(parsedDate)
  }

  month = value => {
    const parsedDate = parse(value, 'MMM dd, yyyy', new Date())
    return getMonth(parsedDate)
  }

  date = value => {
    const parsedDate = parse(value, 'MMM dd, yyyy', new Date())
    return getDate(parsedDate)
  }

  getDetails = async () => {
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updated = data.videos.map(each => ({
      id: each.id,
      name: each.channel.name,
      profileImageUrl: each.channel.profile_image_url,
      title: each.title,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))
    this.setState({videos: updated})
  }

  inp = event => {
    this.setState({input: event.target.value})
  }

  seinp = () => {
    const {input} = this.state
    this.setState({searchInput: input}, this.getDetails)
  }

  logout = () => {
    console.log('lo')
    this.setState({logout: true})
  }

  render() {
    const {videos, logout} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {
            dark,
            changeTheme,
            activeTab,
            changeActiveTab,
            changePremium,
            showPremium,
          } = value
          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }
          const changePremiums = () => {
            changePremium()
          }
          const toggleTheme = () => {
            changeTheme()
          }
          const onHome = () => {
            changeActiveTab('HOME')
          }
          const onTrend = () => {
            changeActiveTab('TREND')
          }
          const onGame = () => {
            changeActiveTab('GAME')
          }
          const onSave = () => {
            changeActiveTab('SAVE')
          }
          const bgColor = () => {
            if (dark) {
              return '#606060'
            }
            return '#f4f4f4'
          }

          return (
            <MainHead logout={logout}>
              <FirstHead dark={dark}>
                <Link to="/" className="noLink">
                  <button type="button" className="noBtn" onClick={onHome}>
                    <img
                      className="login-imgs"
                      src={
                        dark
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="logo"
                    />
                  </button>
                </Link>
                <div className="Head">
                  <button onClick={toggleTheme} type="button" className="noBtn">
                    {dark ? (
                      <BsBrightnessHigh color="white" size={25} />
                    ) : (
                      <BsMoon size={25} />
                    )}
                  </button>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                    className="head-img"
                  />
                  <div>
                    <Popup
                      modal
                      trigger=<BtnHead dark={dark}>Logout</BtnHead>
                      className="popup-content"
                    >
                      {close => (
                        <div className="blur">
                          <ModalContainer>
                            <ModalDesc>
                              Are you sure, you want to logout?
                            </ModalDesc>
                            <ButtonsContainer>
                              <CloseButton
                                type="button"
                                onClick={() => close()}
                              >
                                Cancel
                              </CloseButton>

                              <ConfirmButton
                                type="button"
                                onClick={onClickLogout}
                              >
                                Confirm
                              </ConfirmButton>
                            </ButtonsContainer>
                          </ModalContainer>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
              </FirstHead>
              <div className="koko">
                <SecondHead dark={dark}>
                  <div>
                    <Link to="/">
                      <button onClick={onHome} type="button" className="noBtn">
                        <NavItems
                          act={activeTab === 'HOME'}
                          bgColor={bgColor()}
                        >
                          <AiFillHome
                            size={25}
                            color={activeTab === 'HOME' ? 'red' : '#909090'}
                          />
                          <NavP dark={dark} high={activeTab === 'HOME'}>
                            Home
                          </NavP>
                        </NavItems>
                      </button>
                    </Link>
                    <Link to="/trending">
                      <button onClick={onTrend} type="button" className="noBtn">
                        <NavItems
                          act={activeTab === 'TREND'}
                          bgColor={bgColor()}
                        >
                          <HiFire
                            size={25}
                            color={activeTab === 'TREND' ? 'red' : '#909090'}
                          />
                          <NavP dark={dark} high={activeTab === 'TREND'}>
                            Trending
                          </NavP>
                        </NavItems>
                      </button>
                    </Link>
                    <Link to="/gaming">
                      <button onClick={onGame} type="button" className="noBtn">
                        <NavItems
                          act={activeTab === 'GAME'}
                          bgColor={bgColor()}
                        >
                          <SiYoutubegaming
                            color={activeTab === 'GAME' ? 'red' : '#909090'}
                            size={25}
                          />
                          <NavP high={activeTab === 'GAME'} dark={dark}>
                            Gaming
                          </NavP>
                        </NavItems>
                      </button>
                    </Link>
                    <Link to="/saved-videos">
                      <button onClick={onSave} type="button" className="noBtn">
                        <NavItems
                          act={activeTab === 'SAVE'}
                          bgColor={bgColor()}
                        >
                          <CgPlayListAdd
                            size={25}
                            color={activeTab === 'SAVE' ? 'red' : '#909090'}
                          />
                          <NavP high={activeTab === 'SAVE'} dark={dark}>
                            Saved videos
                          </NavP>
                        </NavItems>
                      </button>
                    </Link>
                  </div>
                  <Extra dark={dark}>
                    <p>CONTACT US</p>
                    <div className="logos">
                      <FaFacebook color="#316FF6" size={25} />
                      <FaTwitter color="skyblue" size={25} />
                      <IoLogoLinkedin color="#0a66c2" size={30} />
                    </div>
                    <p>Enjoy! Now to see your channels and recommendations!</p>
                  </Extra>
                </SecondHead>
                <div>
                  {showPremium && (
                    <div className="banner">
                      <div className="ban">
                        <div className="banner-sub">
                          <img
                            className="login-imgs"
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="logo"
                          />
                          <button className="noBtn" onClick={changePremiums}>
                            {'  '}
                            <IoClose size={25} />
                          </button>
                        </div>
                        <p>Buy Nxt Watch Premium Prepaid plans with UPI</p>
                      </div>
                      <button className="getbtn">GET IT NOW</button>
                    </div>
                  )}
                  <MainHome dark={dark} premium={showPremium}>
                    <div className="mainhome">
                      <input
                        placeholder="Search"
                        className="searchInput"
                        onChange={this.inp}
                      />
                      <button
                        type="search"
                        className="noBtn"
                        onClick={this.seinp}
                      >
                        {'  '}
                        <IoIosSearch />
                      </button>
                    </div>
                    <Content dark={dark}>
                      {videos.map(each => (
                        <Link
                          to={`/videos/${each.id}`}
                          className="lin"
                          key={each.id}
                        >
                          <Card dark={dark}>
                            <img
                              alt="thumbnailImage"
                              className="card-img"
                              src={each.thumbnailUrl}
                            />
                            <div className="card-sub">
                              <img
                                alt="profileImage"
                                className="card-profile"
                                src={each.profileImageUrl}
                              />
                              <div className="pop">
                                <p className="ppp">{each.title}</p>
                                <p className="ppn">{each.name}</p>
                                <p className="ppn">
                                  {each.viewCount} Views
                                  <BsDot />{' '}
                                  {formatDistanceToNowStrict(
                                    new Date(
                                      this.year(each.publishedAt),
                                      this.month(each.publishedAt),
                                      this.date(each.publishedAt),
                                    ),
                                  )}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </Content>
                  </MainHome>
                </div>
              </div>
            </MainHead>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
