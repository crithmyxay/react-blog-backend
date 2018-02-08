import React, { Component } from 'react';

const SinglePost = (props) => {

  const postValues = props.post;
  
  return (
    <div className="blogPost">
      <textarea className="title" value ={postValues.title} /><br/>
      <textarea className="content" value ={postValues.content} /><br />
    </div>
  )
}

// onChange={(event)=>props.handleChange(event.target.value)}

export default SinglePost