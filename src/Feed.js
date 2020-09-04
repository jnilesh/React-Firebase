import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
             <Post 
             profilePic=""
             message="hello"
             timestamp=''
             username=""
             image="" />   
        </div>
    )
}

export default Feed
