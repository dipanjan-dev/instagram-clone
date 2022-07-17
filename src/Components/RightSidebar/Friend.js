import { Avatar } from '@mui/material'
import React from 'react'
import './Friend.css'


const Friend = ({username , profilepic , suggest}) => {

    function Profilepicshow(){
        if(profilepic == " "){
            return(
                <Avatar/> 
            );
        }
        else{
            return(
            <Avatar src={profilepic}/> 
            )
        }
    }

  return (
    <div className='friend'>
        <div className="profile__info">
            {Profilepicshow()}
            {/* {profilepic && <Avatar src={profilepic}/>}  */}
        <div className="profile__name">
          <h4 className="username">{username}</h4>
          <p>{suggest}</p>  
        </div>
        </div>
        <div className="profile__info__button">
            <p>Follow</p>
        </div>
    </div>
  )
}

export default Friend