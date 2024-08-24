import React from 'react'

const WatchContext = React.createContext({
  dark: false,
  showPremium: true,
  activeTab: 'HOME',
  changeTheme: () => {},
  changeActiveTab: () => {},
  changePremium: () => {},
  savedItems: [],
  addSaved: () => {},
})

export default WatchContext
