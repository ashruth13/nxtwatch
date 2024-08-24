import {Component} from 'react'
import {BsMoon, BsBrightnessHigh, BsDot} from 'react-icons/bs'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'
import {AiFillHome, AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import Loader from 'react-loader-spinner'
import {
  formatDistanceToNowStrict,
  parse,
  getMonth,
  getYear,
  getDate,
} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import WatchContext from '../../context/WatchContext'

import {
  Videoend,
  FailureView,
  LoaderContainer,
  VideoMain,
  MainHead,
  BtnHead,
  FirstHead,
  SecondHead,
  NavItems,
  NavP,
  Extra,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Videocard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    pageData: {},
    like: false,
    dislike: false,
    saved: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  Like = () => {
    this.setState({like: true, dislike: false})
  }

  Dislike = () => {
    this.setState({dislike: true, like: false})
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updated = {
        id: data.video_details.id,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        pageData: updated,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
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

  onRetry = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderPlayVideoView = () => {
    const k = null
    return (
      <WatchContext.Consumer>
        {value => {
          const {pageData, like, dislike, saved} = this.state
          const {addSaved, savedItems, dark} = value
          const Save = () => {
            this.setState(prevState => ({saved: !prevState.saved}))
            addSaved(pageData)
          }
          return (
            <div>
              <ReactPlayer url={pageData.videoUrl} />
              <p>{pageData.title}</p>
              <div className="video-sub">
                <p className="ppn">
                  {pageData.viewCount} Views
                  <BsDot />{' '}
                  {formatDistanceToNowStrict(
                    new Date(
                      this.year(pageData.publishedAt),
                      this.month(pageData.publishedAt),
                      this.date(pageData.publishedAt),
                    ),
                  )}
                </p>
                <div className="video-ssub">
                  <button className="noBtn" onClick={this.Like} type="button">
                    {' '}
                    <Videoend like={like} value={dark}>
                      <AiOutlineLike /> Like
                    </Videoend>
                  </button>
                  <button
                    className="noBtn"
                    onClick={this.Dislike}
                    type="button"
                  >
                    {' '}
                    <Videoend like={dislike} value={dark}>
                      <AiOutlineDislike /> Dislike
                    </Videoend>
                  </button>

                  <button className="noBtn" onClick={Save} type="button">
                    {' '}
                    <Videoend like={saved} value={dark}>
                      <CgPlayListAdd /> Save
                    </Videoend>
                  </button>
                </div>
              </div>
              <div className="hr-class">
                <hr />
              </div>
              <div className="card-sub">
                <img
                  alt="profileImage"
                  className="card-profiles"
                  src={pageData.profileImageUrl}
                />
                <div>
                  <p className="ppn">{pageData.name}</p>
                  <p className="ppp">{pageData.subscriberCount} Subscribers</p>
                </div>
              </div>
              <p className="pok">{pageData.description}</p>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  cases = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {pageData} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {
            dark,
            changeTheme,
            activeTab,
            changeActiveTab,
            showPremium,
            changePremium,
          } = value

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
            <MainHead>
              <FirstHead dark={dark}>
                <img
                  className="login-imgs"
                  src={
                    dark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="logo"
                />
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
                  <BtnHead dark={dark}>Logout</BtnHead>
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
                <VideoMain dark={dark}>{this.cases()}</VideoMain>
              </div>
            </MainHead>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Videocard
