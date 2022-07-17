import { Avatar } from '@mui/material'
import React from 'react'
import Friend from './Friend'
import './RightSidebar.css'

import FriendList  from '../../API/FrinedList';



const RightSidebar = () => {

  function FriendListLoop(suggest){
    return(
      <>
          <Friend username={suggest.username} profilepic={suggest.profile_pic} suggest={suggest.suggestion}/>
      </>
    )
  }

  return (
    <div className='right__sidebar'>
      <div className="main__user">
        <div className="main__user__info">
          <Avatar src='https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-6/280396433_1010597713158298_1874602699582778090_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DyDefgAyCCMAX_BKzG8&tn=J-gAYnIM-84ziN9a&_nc_ht=scontent.fccu1-2.fna&oh=00_AT-iNWK3eq3C7bkcx2MhwbOfsqu3bcMd4FcambNtFKDI_g&oe=62D83D9F'/>
          <div className="main__user__info__name">
            <h4 className="user__name">dipanjan_mukherjee</h4>
            <p className="full__name">Dipanjan Mukherjee</p>
          </div>
          </div>
          <div className="main__user__button">
            <p>Switch</p>
          </div>
      </div>

      <div className="suggest__friend">
        <div className="suggest__friend__header">
          <div className="suggest__frined__text">
            <h4>Suggestions For You</h4>
          </div>
          <div className="suggest__friend__button">
            <p>See All</p>
          </div>
        </div>

        <div className="suggest__friend__list">
        {FriendList.map(FriendListLoop)}
        </div>
      </div>
      <div className="copyright">
        <div className="link">
          <p>About</p>
          <p>Help</p>
          <p>Press</p>
          <p>API</p>
          <p>Jobs</p>
          <p>Privacy</p>
          <p>Terms</p>
          
          <p>Location</p>
          <p>Language</p>
        </div>
        <h4>© 2022 INSTAGRAM FROM META</h4>
      </div>
    </div>
  )
}

export default RightSidebar
