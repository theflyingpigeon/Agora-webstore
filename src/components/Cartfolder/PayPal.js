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
            options={{
                // clientId: "Aab_RdejMdXjDlHG51OYRb3-ZxThULKV-RBmZdChJ-lKuqwFcu2snegezKz8fRzE29fltHO_Jjl4nmro",
                currency: "EUR"
            }}
        />
    );
}

export default PayPal;