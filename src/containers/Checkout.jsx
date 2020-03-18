import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Ingridients from "./Ingridients";
import Ingridient from './../selectors/ingridient';
import styles from "./assets/Burger.module.css"


const ingridientsList = [
    { key: "meat", label: "Meat", cost: 1.5 },
    { key: "salad", label: "Salad", cost: 0.7 },
    { key: "cheese", label: "Cheese", cost: 1.1 },
    { key: "bacon", label: "Bacon", cost: 0.5 },
]

const Checkout = ({ ingridients, cost }) => {


    const withIngridients = Object.values(ingridients).map(ingridient => ingridient > 0).filter(i => i !== false)

    if (withIngridients.length < 1) {
        return <Redirect to="/" />
    }

    return (
        <div className="row">
            <div>
                <div className={styles.Burger}>
                    <Ingridients ingridient="topBun" />
                    <Ingridient />
                    <Ingridients ingridient="lowerBun" />
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title mb-3"> Order Summary</h4>
                        <div className="table-responsive">
                            <table className="table table-centered mb-0">

                                <tbody>
                                    {ingridientsList.map(ingridient => (

                                        <tr>
                                            <td>
                                                <h5>{ingridient.label}</h5>
                                                <span className="text-body font-weight-semibold text-muted">
                                                    {ingridients[ingridient.key]} x {ingridient.cost}
                                                </span>
                                            </td>
                                            <td className="text-right">
                                                <h6>${ingridients[ingridient.key] * ingridient.cost.toFixed(2)}</h6>
                                            </td>
                                        </tr>
                                    ))}

                                    <tr className="text-right">
                                        <td>
                                            <h6 className="m-0">Sub Total:</h6>
                                        </td>
                                        <td className="text-right">
                                            <h6 className="m-0">$2</h6>
                                        </td>
                                    </tr>
                                    <tr className="text-right">
                                        <td>
                                            <h5 className="m-0">Total:</h5>
                                        </td>
                                        <td className="text-right">
                                            <h6 className="m-0">${cost.toFixed(2)}</h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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

export default connect(mapState)(Checkout);