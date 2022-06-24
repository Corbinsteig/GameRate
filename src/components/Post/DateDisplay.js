import React, {useState} from 'react'

const DateDisplay = (props) => {
    
    const {smPost, setSmPost} = props

    const postMapped = smPost.map((post) => {
        return post.text
    })

  return (
    <div>
        {postMapped}
    </div>
  )
}

export default PostDisplay