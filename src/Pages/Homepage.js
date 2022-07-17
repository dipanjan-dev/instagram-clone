import React from 'react'
import Header from '../Components/Header/Header'
import Feed from '../Components/Feed/Feed'
import RightSidebar from '../Components/RightSidebar/RightSidebar'

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="app__body">
        <Feed />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Homepage