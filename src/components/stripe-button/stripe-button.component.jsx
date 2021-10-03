import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubblishableKey = 'pk_test_51JgJgdDbFBWlflAOrCVDtmufPPWjLB52FjL7lgUgadzsze2IZRu5XFSrSDOLgr6HamlTjGXwehPWsehRxKctH32U00WW4vISDt'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={pubblishableKey}
    />
  );
};

export default StripeCheckoutButton;