import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Ingridients from './Ingridients';
import Ingridient from './../selectors/ingridient';
import styles from "./assets/Burger.module.css"



const Burger = ({ ingridients, cost }) => {

    const withIngridients = Object.values(ingridients).map(ingridient => ingridient > 0).filter(i => i !== false)

    return (
        <div className="col-lg-6">
            <div className={styles.Burger}>
                <Ingridients ingridient="topBun" />
                {withIngridients.length < 1 ? <h5>Add some ingridients</h5> : <Ingridient />}
                <Ingridients ingridient="lowerBun" />
            </div>

            <div className="d-block mt-5">
                <div className="my-5">
                    <h5 className="text-center">Total: {cost.toFixed(2)}</h5>
                </div>

                <Link to="/checkout">
                    <button className="btn btn-warning w-100 py-3 text-light" disabled={withIngridients.length < 1}>Order</button>
                </Link>
            </div>
        </div>
    );
}

const mapState = ({ ingridients: { ingridients, cost } }) => {
    return {
        ingridients: ingridients,
        cost: cost
    }
}

export default connect(mapState)(Burger);