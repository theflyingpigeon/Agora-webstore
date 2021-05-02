import React from 'react';
import {PayPalButton} from "react-paypal-button-v2";

function PayPal({value}) {
    const {cartTotal} = value;

    return (
        <PayPalButton
            amount={cartTotal}
            onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);
            }}
        />
    );
}

export default PayPal;