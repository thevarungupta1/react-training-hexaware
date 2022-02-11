import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
          //console.log(response.data)
          this.setState({
              posts: response.data
          })
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <h1 className="text-center">All Post</h1>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => <Post data={ post } />)}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PostList;
