import React from 'react'
import axios from 'axios'

const refresh = () => {
    window.location.reload()
}

const deletePost = () => {
    axios
    .delete(`http://localhost:4000/api/getAllPosts/post_id`)
    refresh()
      // console.log(setSmPost)
  };

const DeleteButton = () => {

  return (
    
    <div>
        <button  id='deleteButton' onClick={deletePost} >delete</button>
    </div>
  )
}

export default DeleteButton