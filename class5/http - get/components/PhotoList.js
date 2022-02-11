import React, { Component } from "react";
import axios from "axios";
import Photo from "./Photo";

class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.data);
        this.setState({
          photos: response.data,
        });
      })
      .catch();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">All Photos</h1>
        <div class="row">
          {this.state.photos.map((photo) => (
            <Photo data={photo} />
          ))}
        </div>
      </div>
    );
  }
}
export default PhotoList;
