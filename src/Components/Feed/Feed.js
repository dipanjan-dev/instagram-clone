import React from 'react'
import './Feed.css';
import Post from './Post/Post';
import Story from './Story/Story';

import Posts from '../../API/PostAPI';


const Feed = () => {

  function LoopPost(data){
    return(
      <>
      <Post profile_pic={data.profile_pic} username={data.username} content={data.content}  caption={data.caption} like={data.like} comment={data.comment}/>
      </>
    )
  }

  return (
    <div>
        <Story/>
          {Posts.map(LoopPost)}
    </div>
  )
}

export default Feed