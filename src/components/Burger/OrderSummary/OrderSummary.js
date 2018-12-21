import React, { Component } from 'react';

import ReactAux from'../../../hoc/Auxx/ReactAux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }

    ingredientSummary = Object.keys(this.props.ingredients).map(
        igKey => {
            return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        }
    );

    render () {
        return (
            <ReactAux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {this.ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </ReactAux>
        );
    }
}

export default OrderSummary;