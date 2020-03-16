import React from 'react';


const BurgerBuilder = (props) => {
    const ingridients = [
        { key: "meat", label: "Meat" },
        { key: "tomato", label: "Tomato" },
        { key: "cheese", label: "Cheese" },
        { key: "salads", label: "Salads" },
    ]

    const ingidientsClone = { ...props.ingridients }

    for (let i in ingidientsClone) {
        ingidientsClone[i] = ingidientsClone <= 0
    }



    return (
        <div>
            {ingridients.map(ingridient => {
                return (
                    <div key={ingridient.key}>
                        <p>{ingridient.label}</p>
                        <button
                            onClick={() => props.onAddIngridient(ingridient.key)}
                        >
                            Add
                        </button>
                        <button
                            disabled={!props.ingridients[ingridient.key]}
                            onClick={() => props.onRemoveIngridient(ingridient.key)}
                        >
                            Remove
                        </button>
                    </div>
                )
            })}


        </div>

    );
}

export default BurgerBuilder;