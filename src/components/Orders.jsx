import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FETCH_ORDERS } from '../store/action/order';


const Orders = (props) => {
    useEffect(() => {
        props.fetchOrders(localStorage.getItem("token"), localStorage.getItem("userId"))
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="text-bold">This are your recent <span className="text-danger">orders</span></h1>
            {props.loaded ?
                <div className="mt-5">
                    {props.orders.map(order => {
                        return (

                            <div key={order.id} className='card'>
                                <div className="row card-body">
                                    <div className="col-md-4">
                                        <p className="text-muted">
                                            <span className="font-weight-bold">Name</span>
                                            <span className="d-block">{order.userData.name}</span>
                                        </p>
                                        <p className="text-muted mt-4">
                                            <span className="font-weight-bold">Email</span>
                                            <span className="d-block">{order.email ? order.email : 'No email provided'}</span>
                                        </p>
                                        <p className="text-muted mt-4">
                                            <span className="font-weight-bold">Address</span>
                                            <span className="d-block">{order.userData.address ? order.userData.address : 'No adress provided'}</span>
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <p className="text-muted">
                                            <span className="font-weight-bold">Cost:  <span className="text-primary"> ${order.cost} </span></span>
                                        </p>
                                        <p className="text-muted mt-4">
                                            <span className="font-weight-bold">Ingredients</span>
                                            <span className="d-block mt-2">Bacon: {order.ingredients.bacon} </span>
                                            <span className="d-block">Cheese: {order.ingredients.cheese} </span>
                                            <span className="d-block">Meat: {order.ingredients.meat} </span>
                                            <span className="d-block">Salad:  {order.ingredients.salad} </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                : null}
        </div>
    );
}

const mapState = state => {
    const { auth: { token, userId } } = state;
    const { order: { orders, loaded } } = state;

    return {
        token,
        userId,
        orders,
        loaded
    };
};

const mapDispatch = dispatch => {
    return {
        fetchOrders: (token, userId) => dispatch(FETCH_ORDERS(token, userId)),
    }
}

export default connect(mapState, mapDispatch)(Orders);