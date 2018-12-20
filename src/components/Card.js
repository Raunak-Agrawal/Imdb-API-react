import React, { Component } from "react";
import Popup from "reactjs-popup";
import CardDetails from "./CardDetails.js";
export default class Card extends Component {
  state = {
    disablePrevButton: false,
    disableNextButton: false
  };
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.page === 1) {
      this.setState({ disablePrevButton: true, disableNextButton: false });
    } else if (nextProps.page === 35) {
      this.setState({ disablePrevButton: false, disableNextButton: true });
    } else {
      this.setState({ disablePrevButton: false, disableNextButton: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        <h4 style={{ textAlign: "center" }}>
          Results for- {this.props.queryparam}
        </h4>
        <div
          style={{
            flexWrap: "wrap",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px"
          }}
        >
          {this.props.searchedArray.map((item, index) => {
            return (
              <div
                className="card"
                style={{ width: "18rem", margin: "24px" }}
                key={index}
              >
                <img
                  className="card-img-top"
                  src={item.Poster}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.Title}</h5>
                  <p className="card-text">{item.Year}</p>

                  <Popup
                    trigger={
                      <button className="btn btn-primary"> More Details</button>
                    }
                    position="right center"
                  >
                    <div>
                      <CardDetails imdbID={item.imdbID} />
                    </div>
                  </Popup>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            className="btn btn-primary"
            onClick={this.props.previousPage}
            disabled={this.state.disablePrevButton}
          >
            Previous Page
          </button>
          <button
            className="btn btn-primary"
            onClick={this.props.nextPage}
            disabled={this.state.disableNextButton}
          >
            Next Page
          </button>
        </div>
      </React.Fragment>
    );
  }
}
