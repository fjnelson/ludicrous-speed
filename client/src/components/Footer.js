import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DonateButton from './pages/DonateButton';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function Footer() {
  const footerTextStyle = {
    color: "blue",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "10px",
  };

  return (
		// <footer className="footer-bottom">
		<footer className="fixed-bottom">
			<Elements stripe={stripePromise}>
				<DonateButton />
			</Elements>
			<p style={footerTextStyle}>2023 Team Falcon &trade;</p>
		</footer>
	);
}

export default Footer;