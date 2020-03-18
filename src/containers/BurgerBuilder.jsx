import React from 'react';


const BurgerBuilder = (props) => {

    const ingridients = [
        { key: "meat", label: "Meat" },
        { key: "salad", label: "Salad" },
        { key: "cheese", label: "Cheese" },
        { key: "bacon", label: "Bacon" },
    ]

    const burgerPrice = {
        meat: 1.5,
        salad: 0.7,
        bacon: 1.1,
        cheese: 0.5,
    }


    const ingidientsClone = { ...props.ingridients }

    for (let i in ingidientsClone) {
        ingidientsClone[i] = ingidientsClone <= 0
    }

    return (
        <div className="row">
            {ingridients.map(ingridient => {
                return (
                    <div className="col-3" key={ingridient.key}>
                        <div className="card">
                            <div className="card-body">
                                <div className="float-right">
                                    <span className="badge badge-primary">
                                        {props.ingridients[ingridient.key] !== 0 && props.ingridients[ingridient.key]}
                                    </span>
                                </div>
                                <h5 className="card-title">{ingridient.label}</h5>
                                <h6 className="card-subtitle text-muted">Cost: {burgerPrice[ingridient.key]}</h6>
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