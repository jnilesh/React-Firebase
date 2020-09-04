import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL2hfBj1oB0oACQDwHEHBjT23hP3wqUIK5Wg&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_CcuYdb_H0ofFNq-xK0dNMcczwj10G0xznw&usqp=CAU"
            title="something"  />

            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL2hfBj1oB0oACQDwHEHBjT23hP3wqUIK5Wg&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_CcuYdb_H0ofFNq-xK0dNMcczwj10G0xznw&usqp=CAU"
            title="something"  />

        </div>
    )
}

export default StoryReel
