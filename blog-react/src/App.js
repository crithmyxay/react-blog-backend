import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts.js'
import SinglePost from './entry.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    // Here I can call this.setState for the blog posts!
    fetch('http://localhost:3000/blog')
      .then(response => response.json())
      .then(blogPosts => {
        this.setState({
          posts: blogPosts,
          index: 0
        });
      })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.posts.length > 0 ? (
          <div class="stuff">
            <Posts posts={this.state.posts} handleClick={this._setIndex} />
            <SinglePost post={this.state.posts[this.state.index]} />
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

  _setPost = () => {
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (i === this.state.index) {
          return {
            title: post.title,
            content: post
          }
        } else {
          return post
        }
      })
    })
  }

}

export default App;
