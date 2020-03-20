import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ADD_INGRIDIENT, REMOVE_INGRIDIENT, FETCH_INGRIDIENTS } from './../store/action/ingridients';
import Burger from '../containers/Burger';
import BurgerBuilder from './../containers/BurgerBuilder';

const BurgerHandler = (props) => {
    useEffect(() => {
        props.fetchIngridients()
    }, [])

    const onAddIngridient = (ingridient) => props.addIngrident(ingridient)
    const onRemoveIngridient = (ingridient) => props.removeIngridient(ingridient)

    return (
        <div className="container">
            <div className="row">
                <Burger />
                <div className="col-lg-6 mt-5">
                    <BurgerBuilder
                        ingridients={props.ingridients}
                        onAddIngridient={onAddIngridient}
                        onRemoveIngridient={onRemoveIngridient}
                    />
                </div>
            </div>
        </div>
    );
}

const mapState = ({ ingridients: { ingridients, cost } }) => {
    return {
        ingridients,
        cost
    }
}

const mapDispatch = dispatch => {
    return {
        fetchIngridients: () => dispatch(FETCH_INGRIDIENTS()),
        addIngrident: (ingridient) => dispatch(ADD_INGRIDIENT(ingridient)),
        removeIngridient: (ingridient) => dispatch(REMOVE_INGRIDIENT(ingridient)),
    }
}


export default connect(mapState, mapDispatch)(BurgerHandler);