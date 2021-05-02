import React from 'react';
import {Link} from "react-router-dom";

function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' typeof="button"
                                    onClick={() => clearCart()}>clear cart
                            </button>
                        </Link>

                        <h5><span className="text-title">subtotal:</span><strong>${cartSubTotal}</strong></h5>
                        <h5><span className="text-title">tax:</span><strong>${cartTax}</strong></h5>
                        <h5><span className="text-title">total:</span><strong>${cartTotal}</strong></h5>

                        {/*<PayPalButton*/}
                        {/*    amount="0.01"*/}
                        {/*    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"*/}
                        {/*    onSuccess={(details, data) => {*/}
                        {/*        alert("Transaction completed by " + details.payer.name.given_name);*/}

                        {/*        // OPTIONAL: Call your server to save the transaction*/}
                        {/*        return fetch("/paypal-transaction-complete", {*/}
                        {/*            method: "post",*/}
                        {/*            body: JSON.stringify({*/}
                        {/*                orderId: data.orderID*/}
                        {/*            })*/}
                        {/*        });*/}
                        {/*    }}*/}
                        {/*    options={{*/}
                        {/*        clientId: "PRODUCTION_CLIENT_ID"*/}
                        {/*    }}*/}
                        {/*/>*/}

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotal;
