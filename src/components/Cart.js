import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

class Cart extends Component {
    //to remove the item completely
    handleRemove = (cartId) => {
        this.props.removeItem(cartId);
    }
    //to add the quantity
    handleAddQuantity = (cartId) => {
        this.props.addQuantity(cartId);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (cartId) => {
        this.props.subtractQuantity(cartId);
    }

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item avatar" key={`${item.cartId.productId}${item.cartId.size}${item.cartId.color}`}>
                            <div className="item-img">
                                <img className="cart-img" src={item.image} alt={item.title} />
                            </div>
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p>Size: {item.cartId.size}</p>
                                <p>Color: {item.cartId.color}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.cartId) }}>remove</i></Link>
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.cartId) }}>add</i></Link>
                                </div>
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.cartId) }}>Remove</button>
                            </div>
                        </li>
                    )
                })
            ) :
            (
                <div className="cart-div center">
                    <h4>Your Cart is Empty</h4>
                    <a className="waves-effect waves-light btn-large"><Link to="/" className="link-text">Back to Main Page</Link></a>
                </div>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>Shopping Cart:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (cartId) => { dispatch(removeItem(cartId)) },
        addQuantity: (cartId) => { dispatch(addQuantity(cartId)) },
        subtractQuantity: (cartId) => { dispatch(subtractQuantity(cartId)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)