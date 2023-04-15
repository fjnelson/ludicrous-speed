import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonateButton from "./pages/DonateButton";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function Footer() {
	const footerTextStyle = {
		position: "fixed",
		bottom: "0",
		left: "0",
		width: "100%",
		//   padding: "1rem",
		color: "blue",
		fontSize: "14px",
		textAlign: "right",
		marginTop: "10px",
	};

	return (
		// <footer className="footer-bottom">
		<div>
			<footer style={footerTextStyle}>
				<Elements stripe={stripePromise}>
					<DonateButton />
				</Elements>
				<p>2023 Team Falcon &trade;</p>
			</footer>
		</div>
	);
}

export default Footer;
