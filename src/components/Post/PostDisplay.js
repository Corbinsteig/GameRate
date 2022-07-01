import React, {useState, useEffect} from 'react'
import { render } from 'react-dom'
import './PostDisplay.css'
import ProfileIcon from './ProfileIcon'
import axios from 'axios'
import DeleteButton from './DeleteButton'

const PostDisplay = (props, event) => {
    const today = new Date();
    const date = (today.getMonth() + 1) + '-'  + today.getDate() + '-' + today.getFullYear() ;
    const time = today.getHours() + ':' + today.getMinutes()
    const {smPost, setSmPost} = props
    const [style, setStyle] = useState('Post__parent')



    
  const deletePost = (smPost) => {
    axios
    .delete(`http://localhost:4000/api/getAllPosts/post_id`, {params: {id: smPost.post_id}})
    
      // console.log(setSmPost)
  };


  
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
          {/* <button  id='deleteButton' onClick={deletePost} >delete</button> */}
          <DeleteButton/>
        </div>
        <div className='Post__content'>
        <span className='Post__text'>{post.text}</span>
        
        
        {/* <button onClick={toggleIsLiked}></button> */}
        {/* {isLiked && <h2>Liked</h2>} */}
        </div>
    </section>
    
  ))
)}


export default PostDisplay