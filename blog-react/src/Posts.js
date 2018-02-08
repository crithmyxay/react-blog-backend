import React, { Component } from 'react';

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
      <div className="posts">
        {allPosts}
      </div>
  )
}

export default drawPosts