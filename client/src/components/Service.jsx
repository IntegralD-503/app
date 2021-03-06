import React from "react";
import {
  GrYoga,
  GrRun,
  GrCafeteria,
  GrRestaurant,
  GrSwim,
  GrGamepad,
} from "react-icons/gr";
import Reservation from "./Reservation.jsx";
class Service extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let iconChoice;
    if (this.props.icon === "run") {
      iconChoice = <GrRun />;
    } else if (this.props.icon === "yoga") {
      iconChoice = <GrYoga />;
    } else if (this.props.icon === "nutrition") {
      iconChoice = <GrCafeteria />;
    } else if (this.props.icon === "cooking") {
      iconChoice = <GrRestaurant />;
    } else if (this.props.icon === "swim") {
      iconChoice = <GrSwim />;
    } else if (this.props.icon === "game") {
      iconChoice = <GrGamepad />;
    }
    return (
      <div className="service-box" id="services">
        <div>
          <h1 className="service-icon">{iconChoice}</h1>
          <button
            type="button"
            className="btn btn-outline-dark rounded-pill"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            {this.props.info}
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Schedule
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Reservation />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Make a Reservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
