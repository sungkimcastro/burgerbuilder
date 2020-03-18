import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ADD_INGRIDIENT, REMOVE_INGRIDIENT } from './../store/action/ingridients';
import Ingridients from '../containers/Ingridients';
import BurgerBuilder from './../containers/BurgerBuilder';
import styles from "./assets/Burger.module.css"



class Burger extends Component {

    onAddIngridient = (ingridient) => this.props.addIngrident(ingridient)
    onRemoveIngridient = (ingridient) => this.props.removeIngridient(ingridient)


    render() {

        const { ingridients, cost } = this.props


        const ingridient = Object.keys(ingridients).map(ingridient => {
            return [...Array(ingridients[ingridient])].map((_, i) => {
                return <Ingridients ingridient={ingridient} key={ingridient + i} />
            })
        }).reduce((acc, val) => acc.concat(val), [])

        return (
            <div className="row">

                <div className="container">
                    <div className={styles.Burger}>
                        <Ingridients ingridient="topBun" />
                        {ingridient.length === 0
                            ? <h4>Start adding ingridients</h4>
                            : ingridient}
                        <Ingridients ingridient="lowerBun" />

                        <div className="my-5">
                            <h5 className="text-center">Total: {cost.toFixed(2)}</h5>
                        </div>
                    </div>

                    <BurgerBuilder
                        ingridients={ingridients}
                        onAddIngridient={this.onAddIngridient}
                        onRemoveIngridient={this.onRemoveIngridient}
                    />

                    <div className="d-block mt-5">
                        <Link to="/order">
                            <button className="btn btn-warning w-100 py-3 text-light">Order</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

const mapState = ({ ingridients: { ingridients, cost } }) => {
    return {
        ingridients: ingridients,
        cost: cost
    }
}

const mapDispatch = dispatch => {
    return {
        addIngrident: (ingridient) => dispatch(ADD_INGRIDIENT(ingridient)),
        removeIngridient: (ingridient) => dispatch(REMOVE_INGRIDIENT(ingridient)),
    }
}

export default connect(mapState, mapDispatch)(Burger);