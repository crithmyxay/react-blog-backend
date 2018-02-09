import React, { Component } from 'react';

const addPost = (props) => {

  return (
    <button onClick={props.addPostClick}>Add Post</button>
  )
}

export default addPost