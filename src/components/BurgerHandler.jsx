import React from 'react';
import { connect } from 'react-redux';
import { ADD_INGRIDIENT, REMOVE_INGRIDIENT } from './../store/action/ingridients';
import Burger from '../containers/Burger';
import BurgerBuilder from './../containers/BurgerBuilder';


const BurgerHandler = (props) => {
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


export default connect(mapState, mapDispatch)(BurgerHandler);