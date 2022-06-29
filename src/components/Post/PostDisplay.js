import React, {useState} from 'react'
import { render } from 'react-dom'
import './PostDisplay.css'
import ProfileIcon from './ProfileIcon'



const PostDisplay = (props) => {
    const today = new Date();
    const date = (today.getMonth() + 1) + '-'  + today.getDate() + '-' + today.getFullYear() ;
    const time = today.getHours() + ':' + today.getMinutes()
    const {smPost, setSmPost} = props
    const [style, setStyle] = useState('Post__parent')
  
  const changeStyle = () => {
    setStyle("Post__parent2")
  }

  return (smPost.reverse().map((post, index) => (
    <section key={index} className={style}>
        <div className='Post__meta-data'>
        <span className='Post__date'>{date} {time}</span>
          <div className="Post__profile-picture" >
          <ProfileIcon/> 
          </div>
          <button id='deleteButton' onClick={changeStyle}>delete</button>
        </div>
        <div className='Post__content'>
        <span className='Post__text'>{post.text}</span>
        
        </div>
    </section>
  ))
)}


export default PostDisplay