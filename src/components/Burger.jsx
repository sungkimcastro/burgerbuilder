import React, { Component } from 'react';
import Ingridients from '../containers/Ingridients';
import BurgerBuilder from './../containers/BurgerBuilder';

class Burger extends Component {
    state = {
        ingridients: {
            meat: 0,
            tomato: 0,
            cheese: 0,
            salads: 0
        }
    }

    onAddIngridient = (ingridient) => {
        const ingridients = { ...this.state.ingridients }
        ingridients[ingridient]++
        this.setState({ ingridients })
    }

    onRemoveIngridient = (ingridient) => {
        const ingridients = { ...this.state.ingridients }
        ingridients[ingridient]--
        this.setState({ ingridients })
    }


    render() {

        const ingridient = Object.keys(this.state.ingridients).map(ingridient => {
            return [...Array(this.state.ingridients[ingridient])].map((_, i) => {
                return <Ingridients ingridient={ingridient} key={ingridient + i} />
            })
        })



        return (
            <div>
                <Ingridients ingridient="topBun" />
                {ingridient}
                <Ingridients ingridient="lowerBun" />

                <BurgerBuilder
                    ingridients={this.state.ingridients}
                    onAddIngridient={this.onAddIngridient}
                    onRemoveIngridient={this.onRemoveIngridient}
                />

            </div>
        );
    }
}

export default Burger;