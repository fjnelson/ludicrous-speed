import React from "react";
import { useStripe } from "@stripe/react-stripe-js";

function DonateButton() {
	const stripe = useStripe();

	const handleClick = async () => {
		const { error } = await stripe.redirectToCheckout({
			lineItems: [{ price: "price_1Mv4iDHBDh6WAzZIvNpKAAia", quantity: 1 }],
			mode: "payment",
			successUrl: "https://example.com/success",
			cancelUrl: "https://example.com/cancel",
		});

		if (error) {
			console.log(error);
		}
	};

	return (
		<button
			onClick={handleClick}
			style={{
				backgroundColor: "#FFC857",
				// border: 'none',
				// color: 'white',
				// padding: '15px 32px',
				// textAlign: 'center',
				// textDecoration: 'none',
				// display: 'inline-block',
				// fontSize: '16px',
				// margin: '4px 2px',
				// cursor: 'pointer'
			}}>
			Donate $20
		</button>
	);
}

export default DonateButton;
