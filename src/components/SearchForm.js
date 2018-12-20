import React, { Component } from "react";
export default class SearchFoorm extends Component {
  state = {
    currentItem: "",
    pageNo: 1
  };
  updateTask = e => {
    this.setState({ currentItem: e.target.value });
  };
  displayItem = e => {
    e.preventDefault();

    this.props.onSearch(this.state.currentItem, this.state.pageNo);
    this.props.history.push("/showdetail");
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        <form onSubmit={this.displayItem}>
          <div className="form-group">
            <input
              value={this.state.currentItem}
              type="text"
              onChange={this.updateTask}
              className="form-control"
              placeholder="Enter item"
              required
            />{" "}
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              style={{ position: "relative", left: "208px", bottom: "35px" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
