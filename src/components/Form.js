import React, { Component } from "react";

class Form extends Component {
  state = {};
  
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your first name"
                id="billing-first-name"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your last name"
                id="billing-last-name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter full address"
                id="billing-address"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Town / City</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your city name"
                id="billing-town-city"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>State</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your state"
                id="billing-state"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Zip / Postal Code</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your zip code"
                id="billing-zip-postal"
              />
            </div>
          </div>
        </div>
        <div className="form-group mt-3">
          <label>Order Notes:</label>
          <textarea
            className="form-control"
            id="example-textarea"
            rows="3"
            placeholder="Write some note.."
          ></textarea>
        </div>
      </form>
    );
  }
}

export default Form;
