import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Ingridients from './Ingridients';
import Ingridient from './../selectors/ingridient';
import styles from "./assets/Burger.module.css"



const Burger = ({ ingridients, cost, loaded, token }) => {
    let withIngridients = null

    if (loaded) {
        withIngridients = Object.values(ingridients).map(ingridient => ingridient > 0).filter(i => i !== false)
    }

    return (
        <React.Fragment>
            {loaded ?
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
                            <button
                                className="btn btn-warning w-100 py-3 text-light"
                                disabled={!token || withIngridients.length < 1}>
                                {token ? 'Order' : "You need to login first"}
                            </button>
                        </Link>
                    </div>
                </div>
                : null}
        </React.Fragment>
    );
}

const mapState = ({ ingridients: { ingridients, cost, loaded }, auth: { token } }) => {
    return {
        ingridients,
        cost,
        loaded,
        token
    }
}

export default connect(mapState)(Burger);