/******************************************
 *  Author : quantumRaven23   
 *  Created On : Wed May 26 2021
 *  File : stripe-button.component.jsx
 *  Project : 
 *******************************************/
//React
import React from 'react';

//Components
import StripeCheckout from 'react-stripe-checkout';

//Styles

//Misc

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = ''

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Crwn Clothing'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton 