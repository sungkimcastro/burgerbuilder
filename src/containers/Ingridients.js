import React from "react";
import styles from "./assets/Ingridients.module.css";

const Ingridients = props => {
  switch (props.ingridient) {
    case "topBun":
      return (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );

    case "meat":
      return <div className={styles.Meat}>Meat</div>;

    case "salad":
      return <div className={styles.Salad}>Salad</div>;

    case "cheese":
      return <div className={styles.Cheese}>Cheese</div>;

    case "bacon":
      return <div className={styles.Bacon}>Bacon</div>;

    case "lowerBun":
      return <div className={styles.BreadBottom}>Lower bun</div>;

    default:
      return null;
  }
};

export default Ingridients;
