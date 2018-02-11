import React from 'react';
import AddPost from './addPost.js'

const drawPosts = (props) => {
  const allPosts = props.posts.map( (post, i)=>{
    return (
      <ul>
        <li type="button" onClick={()=>props.handleClick(i)}>{post.title}</li>
        {/* <textarea value={post.content} /> */}
      </ul>
    )
  })

    return (
      <div>
        {allPosts}
        <AddPost addPostClick={props.addPostClick} />
      </div>
  )
}

export default drawPosts