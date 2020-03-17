import React, { Component } from 'react';
import Ingridients from '../containers/Ingridients';
import BurgerBuilder from './../containers/BurgerBuilder';
import styles from "./assets/Burger.module.css"

class Burger extends Component {
    state = {
        ingridients: {
            meat: 0,
            salad: 0,
            bacon: 0,
            cheese: 0
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
                    </div>
                    <BurgerBuilder
                        ingridients={this.state.ingridients}
                        onAddIngridient={this.onAddIngridient}
                        onRemoveIngridient={this.onRemoveIngridient}
                    />
                </div>
            </div>
        );
    }
}

export default Burger;