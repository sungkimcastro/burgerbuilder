import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Ingridients from './Ingridients';
import styles from "./assets/Burger.module.css"



const Burger = ({ ingridients, cost }) => {

    const ingridient = Object.keys(ingridients).map(ingridient => {
        return [...Array(ingridients[ingridient])].map((_, i) => {
            return <Ingridients ingridient={ingridient} key={ingridient + i} />
        })
    }).reduce((acc, val) => acc.concat(val), [])
    return (<div className="col-lg-6">
        <div className={styles.Burger}>

            <Ingridients ingridient="topBun" />
            {ingridient.length === 0
                ? <h4>Start adding ingridients</h4>
                : ingridient}
            <Ingridients ingridient="lowerBun" />
        </div>

        <div className="d-block mt-5">
            <div className="my-5">
                <h5 className="text-center">Total: {cost.toFixed(2)}</h5>
            </div>

            <Link to="/order">
                <button className="btn btn-warning w-100 py-3 text-light">Order</button>
            </Link>
        </div>
    </div>);
}

const mapState = ({ ingridients: { ingridients, cost } }) => {
    return {
        ingridients: ingridients,
        cost: cost
    }
}


export default connect(mapState)(Burger);