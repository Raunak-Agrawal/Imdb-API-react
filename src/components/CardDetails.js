import React, { Component } from "react";

export default class CardDetails extends Component {
  state = {
    itemDetails: {}
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=22b0de&i=${this.props.imdbID}`)
      .then(res => res.json())
      .then(res => this.setState({ itemDetails: res }));
  }
  render() {
    const { itemDetails } = this.state;
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item ">Title: {itemDetails.Title}</li>
          <li className="list-group-item">Actors: {itemDetails.Actors}</li>
          <li className="list-group-item">Genre: {itemDetails.Genre}</li>
          <li className="list-group-item">Website: {itemDetails.Website}</li>
        </ul>
      </div>
    );
  }
}
