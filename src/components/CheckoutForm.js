import React, { Component } from "react";

class CheckoutForm extends Component {
  state = {
    name: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    note: ""
  };

  onChangeValue = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const form = (label, placeholder, name, value) => {
      return (
        <div className="col-md-6">
          <div className="form-group">
            <label>{label}</label>
            <input
              className="form-control"
              type="text"
              placeholder={placeholder}
              id="billing-first-name"
              name={name}
              value={value}
              onChange={this.onChangeValue}
            />
          </div>
        </div>
      );
    };

    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <div className="row">
          {form("First Name", "Enter your first name", "name", this.state.name)}
          {form(
            "Last Name",
            "Enter your last name",
            "lastName",
            this.state.lastName
          )}
        </div>
        <div className="row">
          {form("Address", "Enter full address", "address", this.state.address)}
          {form("Town / City", "Enter your city name", "city", this.state.city)}
        </div>

        <div className="row">
          {form("State", "Enter your state", "state", this.state.state)}
          {form(
            "Zip / Postal Code",
            "Enter your zip code",
            "zip",
            this.state.zip
          )}
        </div>
        <div className="form-group mt-3">
          <label>Order Notes:</label>
          <textarea
            className="form-control"
            id="example-textarea"
            rows="3"
            placeholder="Write some note.."
            value={this.state.note}
            name="note"
            onChange={this.onChangeValue}
          ></textarea>
        </div>
        {this.state.name.length <= 1 ? (
          <button className="btn btn-outline-danger w-100" disabled>
            First and last name are required
          </button>
        ) : (
          <button className="btn btn-outline-danger w-100">Order</button>
        )}
      </form>
    );
  }
}

export default CheckoutForm;
