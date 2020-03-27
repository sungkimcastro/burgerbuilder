import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { PURCHASE_BURGER } from "../store/action/order";
import Button from "./utils/Button";

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

    const data = {
      ingredients: this.props.ingridients,
      cost: this.props.cost,
      email: this.props.email,
      userData: this.state,
      userId: this.props.userId
    };

    this.props.purchaseBurger(this.props.token, data);
  };

  render() {
    const { purchased, error } = this.props;
    const { name } = this.state;

    if (purchased) return <Redirect to="/orders" />;

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
        {error && <p>{error} </p>}
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
            rows="3"
            placeholder="Write some note.."
            value={this.state.note}
            name="note"
            onChange={this.onChangeValue}
          ></textarea>
        </div>
        {name.length <= 1 ? (
          <Button disabled={true}>First name is required</Button>
        ) : (
          <Button disabled={false}>Order</Button>
        )}
      </form>
    );
  }
}

const mapState = state => {
  const {
    ingridients: { ingridients, cost }
  } = state;

  const {
    auth: { token, userId, email }
  } = state;

  const {
    order: { purchased, error }
  } = state;

  return {
    ingridients,
    cost,
    token,
    userId,
    email,
    purchased,
    error
  };
};

const mapDispatch = dispatch => {
  return {
    purchaseBurger: (data, token) => dispatch(PURCHASE_BURGER(data, token))
  };
};

export default connect(mapState, mapDispatch)(CheckoutForm);
