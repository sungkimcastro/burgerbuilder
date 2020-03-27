import React, { Component } from 'react';
import { connect } from "react-redux";
import Ingridients from "../containers/Ingridients";
import Ingridient from '../selectors/ingridient';
import styles from "../containers/assets/Burger.module.css"
import OrderSummary from "../containers/OrderSummary";
import CheckoutForm from './CheckoutForm';


class Checkout extends Component {
    state = {
        checkout: false
    }

    render() {

        const { loaded } = this.props;

        return (
            <React.Fragment>
                {
                    loaded ?
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    {
                                        this.state.checkout
                                            ?
                                            <div className="mt-5">
                                                <CheckoutForm />
                                            </div>
                                            :
                                            <div className={styles.Burger}>
                                                <Ingridients ingridient="topBun" />
                                                <Ingridient />
                                                <Ingridients ingridient="lowerBun" />
                                            </div>
                                    }
                                </div>
                                <div className="col-lg-4 mt-5">
                                    <OrderSummary setCheckout={() => this.setState({ checkout: true })} />
                                </div>
                            </div>
                        </div>
                        : null
                }
            </React.Fragment>

        );
    }
}





const mapState = ({ ingridients: { ingridients, cost, loaded } }) => {
    return {
        ingridients,
        cost,
        loaded
    }
}

export default connect(mapState)(Checkout);