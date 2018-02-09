import React, { Component } from 'react';

const SinglePost = (props) => {

  const postValues = props.post;
  
  return (
    <div className="blogPost">
      <textarea className="title" value ={postValues.title} onChange={(event)=>props.handleChangeTitle(event.target.value)} /><br/>
      <textarea className="content" value ={postValues.content} onChange={(event)=>props.handleChangeContent(event.target.value)} /><br />
    </div>
  )
}



export default SinglePost