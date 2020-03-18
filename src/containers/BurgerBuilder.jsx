import React from 'react';


const BurgerBuilder = (props) => {

    const ingridients = [
        { key: "meat", label: "Meat", cost: 1.5 },
        { key: "salad", label: "Salad", cost: 0.7 },
        { key: "cheese", label: "Cheese", cost: 0.5 },
        { key: "bacon", label: "Bacon", cost: 1.1 },
    ]

    const ingidientsClone = { ...props.ingridients }

    for (let i in ingidientsClone) {
        ingidientsClone[i] = ingidientsClone <= 0
    }

    return (
        <div className="row mt-5">
            {ingridients.map(ingridient => {
                return (
                    <div className="col-lg-6 my-2" key={ingridient.key} >
                        <div className="card widget-flat">
                            <div className="card-body">
                                <div className="float-right">
                                    <span className="badge badge-primary">
                                        {props.ingridients[ingridient.key] !== 0 && props.ingridients[ingridient.key]}
                                    </span>
                                </div>
                                <h5 className="card-title">{ingridient.label}</h5>
                                <h6 className="card-subtitle text-muted">Cost: ${ingridient.cost}</h6>
                            </div>
                            <div className="card-body">
                                <button
                                    className="btn btn-outline-success mr-3"
                                    onClick={() => props.onAddIngridient(ingridient.key)}
                                >
                                    Add
                                     </button>
                                <button
                                    className="btn btn-outline-danger"
                                    disabled={!props.ingridients[ingridient.key]}
                                    onClick={() => props.onRemoveIngridient(ingridient.key)}
                                >
                                    Remove
                                    </button>
                            </div>
                        </div>
                    </div>
                )
            })}


        </div>

    );
}

export default BurgerBuilder;