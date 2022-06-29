import React from 'react'
import { render } from 'react-dom'
import './PostDisplay.css'
import ProfileIcon from './ProfileIcon'



const PostDisplay = (props) => {
    const today = new Date();
    const date = (today.getMonth() + 1) + '-'  + today.getDate() + '-' + today.getFullYear() ;
    const time = today.getHours() + ':' + today.getMinutes()
    const {smPost, setSmPost} = props

    

  return (smPost.reverse().map((post, index) => (
    <section key={index} className='Post__parent'>
        <div className='Post__meta-data'>
        <span className='Post__date'>{date} {time}</span>
          <div className="Post__profile-picture" >
          <ProfileIcon/> 
          </div>
        </div>
        <div className='Post__content'>
        <span className='Post__text'>{post.text}</span>
        </div>
    </section>
  ))
)}


export default PostDisplay