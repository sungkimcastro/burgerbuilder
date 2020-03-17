import React from 'react';


const BurgerBuilder = (props) => {
    const ingridients = [
        { key: "meat", label: "Meat" },
        { key: "salad", label: "Salad" },
        { key: "cheese", label: "Cheese" },
        { key: "bacon", label: "Bacon" },
    ]

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
                                <h5 className="card-title">{ingridient.label}</h5>
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