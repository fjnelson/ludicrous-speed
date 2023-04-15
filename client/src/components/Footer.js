import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonateButton from "./pages/DonateButton";
import {
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	List,
	Segment,
} from "semantic-ui-react";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function Copyright() {
	const year = new Date().getFullYear();
	return <div>&copy; {year} Team Falcon &trade;</div>;
}

function Footer() {
	const year = new Date().getFullYear();
	
	// const footerTextStyle = {
	// 	// position: "fixed",
	// 	backgroundColor: "#255f85",
	// 	bottom: "0",
	// 	left: "0",
	// 	width: "100%",
	// 	//   padding: "1rem",
	// 	// color: "blue",
	// 	fontSize: "14px",
	// 	textAlign: "right",
	// 	marginTop: "10px",
	// };

	return (
		// <footer className="footer-bottom">
		<div style={{ backgroundColor: "#255f85", color: "black" }}>
			{/* <footer style={footerTextStyle}> */}
			<footer>
				{/* <Elements stripe={stripePromise}>
					<DonateButton />
				</Elements>
				<p>2023 Team Falcon &trade;</p>

				<Copyright /> */}

				<Segment vertical style={{ padding: "0em 0em" }}>
					<Container>
						<Grid divided stackable>
							<Grid.Row>
								<Grid.Column width={5}>
									<Header as="h4" content="About" />
									<List link>
										<List.Item as="a">Contact Us</List.Item>
										<List.Item>
											<Copyright />
										</List.Item>
									</List>
								</Grid.Column>
								{/* <Grid.Column width={5}> */}
								<Grid.Column width={5}>
									<Header as="h4">Donate to fund this site!</Header>
									<Elements stripe={stripePromise}>
										<DonateButton />
									</Elements>
									{/* <p>
									Extra space for a call to action inside the footer that could
									help re-engage users.
								</p> */}
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Divider section />
						{/* <List horizontal inverted divided link size="small">
						<List.Item as="a" href="#">
						<Icon name="facebook" />
						</List.Item>
						<List.Item as="a" href="#">
						<Icon name="twitter" />
						</List.Item>
						<List.Item as="a" href="#">
						<Icon name="instagram" />
						</List.Item>
					</List> */}
					</Container>
				</Segment>
			</footer>
		</div>
	);
}

export default Footer;
