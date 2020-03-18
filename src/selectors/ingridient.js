import React from "react";
import Ingridients from "./../containers/Ingridients";
import { connect } from "react-redux";

const Ingridient = ({ ingridients }) => {
  return Object.keys(ingridients).map(ingridient => {
    return [...Array(ingridients[ingridient])].map((_, i) => {
      return <Ingridients ingridient={ingridient} key={ingridient + i} />;
    });
  });
};

const mapState = ({ ingridients: { ingridients } }) => {
  return {
    ingridients: ingridients
  };
};

export default connect(mapState)(Ingridient);
