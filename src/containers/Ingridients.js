import React from "react";

const Ingridients = props => {
  switch (props.ingridient) {
    case "topBun":
      return <div>Top bun</div>;

    case "meat":
      return <div>Meat</div>;

    case "tomato":
      return <div>Tomato</div>;

    case "cheese":
      return <div>Cheese</div>;

    case "salads":
      return <div>Salads</div>;

    case "lowerBun":
      return <div>Lower bun</div>;

    default:
      return null;
  }
};

export default Ingridients;
