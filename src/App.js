import {Component} from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import Saved from './components/Saved'
import WatchContext from './context/WatchContext'
import Videocard from './components/Videocard'

// Replace your code here
class App extends Component {
  state = {dark: false, activeTab: 'HOME', showPremium: true, savedItems: []}

  addSaveItems = item => {
    const {savedItems} = this.state
    const productObject = savedItems.find(
      eachCartItem => eachCartItem.id === item.id,
    )
    if (productObject) {
      this.setState(prevState => ({
        savedItems: prevState.savedItems.filter(each => each.id !== item.id),
      }))
    } else {
      const updatedCartList = [...savedItems, item]
      this.setState({savedItems: updatedCartList})
    }
  }

  changeTheme = () => {
    this.setState(prevState => ({dark: !prevState.dark}))
  }

  changeActiveTab = value => {
    this.setState({activeTab: value})
  }

  changePremium = () => {
    this.setState({showPremium: false})
  }

  render() {
    const {dark, activeTab, showPremium, savedItems} = this.state

    return (
      <WatchContext.Provider
        value={{
          dark,
          activeTab,
          showPremium,
          savedItems,
          changeTheme: this.changeTheme,
          changeActiveTab: this.changeActiveTab,
          changePremium: this.changePremium,
          addSaved: this.addSaveItems,
        }}
      >
        {' '}
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Header} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/saved-videos" component={Saved} />
            <ProtectedRoute exact path="/videos/:id" component={Videocard} />
          </Switch>
        </BrowserRouter>
      </WatchContext.Provider>
    )
  }
}

export default App
