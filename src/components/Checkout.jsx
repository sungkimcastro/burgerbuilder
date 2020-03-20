import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Ingridients from "../containers/Ingridients";
import Ingridient from '../selectors/ingridient';
import styles from "../containers/assets/Burger.module.css"
import OrderSummary from "../containers/OrderSummary";
import Form from './Form';


class Checkout extends Component {
    state = {
        checkout: false
    }

    render() {

        const withIngridients = Object.values(this.props.ingridients).map(ingridient => ingridient > 0).filter(i => i !== false)

        if (withIngridients.length < 1) {
            return <Redirect to="/" />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            this.state.checkout
                                ?
                                <div className="mt-5">
                                    <Form />
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
        );
    }
}





const mapState = ({ ingridients: { ingridients, cost } }) => {
    return {
        ingridients,
        cost
    }
}

export default connect(mapState)(Checkout);