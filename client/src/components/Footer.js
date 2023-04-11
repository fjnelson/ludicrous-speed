import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function DonateButton() {
  const stripe = useStripe();

  const handleClick = async () => {
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1Mv4iDHBDh6WAzZIvNpKAAia', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://fjnelson.github.io/ludicrous-speed/ThankYou',
      cancelUrl: 'https://fjnelson.github.io/ludicrous-speed/ThankYou',
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={handleClick}>Donate $20</button>
  );
}

function Footer() {
  return (
    <footer className='footer-bottom'>
      <Elements stripe={stripePromise}>
        <DonateButton />
      </Elements>
      <p>2023 Team Falcon &trade;</p>
    </footer>
  );
}

export default Footer;