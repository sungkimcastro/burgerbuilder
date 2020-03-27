import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-outline-danger w-100" disabled={props.disabled}>{props.children}</button>
    )
}

export default Button;