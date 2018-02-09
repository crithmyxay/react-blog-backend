import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Posts from './Posts.js';
import SinglePost from './entry.js';
import EditPost from './PostEditor.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // Here I can call this.setState for the blog posts!
    axios.get('http://localhost:3000/blog')
      .then(response => response.data)
      .then(blogPosts => {
        this.setState({
          posts: blogPosts,
          index: 0
        });
      })
  }


  render() {
    console.log(this.state)

    let whichPost = () => {
      if (this.state.posts[this.state.index].title === '') {
        return <EditPost post={this.state.posts[this.state.index]} handleChangeTitle={this._setTitle} handleChangeContent={this._setContent} />
      } else {
        return <SinglePost post={this.state.posts[this.state.index]} />
      }
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.posts.length > 0 ? (
          <div className="stuff">
            <Posts posts={this.state.posts} handleClick={this._setIndex} addPostClick={this._addPost} />
            {whichPost()}
          </div>
        ) : null}
      </div>
    );
  }

  _setIndex = (num) => {
    this.setState({
      index: num
    });
  }

  _setTitle = (name) => {
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (i === this.state.index) {
          return {
            key: i,
            title: name,
            content: post.content
          }
        } else {
          return post
        }
      })
    })
  }

  _setContent = (cont) => {
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (i === this.state.index) {
          return {
            key: i,
            title: post.title,
            content: cont
          }
        } else {
          return post
        }
      })
    })
  }

  _addPost  = () => {
    this.setState({
      posts: this.state.posts.concat({title: '', content: ''}),
      index: this.state.posts.length
    })
  }

}

export default App;
