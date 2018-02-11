import React from 'react';

const EditPost = (props) => {

  const postValues = props.post;
  
  return (
    <div className="blogPost">
      <textarea className="title" value ={postValues.title} onChange={(event)=>props.handleChangeTitle(event.target.value)}/><br/>
      <textarea className="content" value ={postValues.content} onChange={(event)=>props.handleChangeContent(event.target.value)}/><br />
      <button type="submit" value="Submit">Submit</button>
    </div>
  )
}

export default EditPost