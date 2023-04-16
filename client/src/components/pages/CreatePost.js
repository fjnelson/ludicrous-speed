import React, { useState } from 'react';
// import semantic cridder 20230415181453
import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handleTitleChange = (event) => setTitle(event.target.value);
	const handleDescriptionChange = (event) => setDescription(event.target.value);
	const handleContentChange = (event) => setContent(event.target.value);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Title:", title);
		console.log("Description:", description);
		console.log("Content:", content);
		// Add your code to submit the form data to the server here
		// After the data is submitted, navigate to the home page
		navigate("/");
	};

	// cridder 20230415183411
	return (
		<Grid textAlign="center" style={{ height: "100vh" }}>
			<Grid.Column style={{ maxWidth: 800 }}>
				<Header as="h1" color="orange" textAlign="center">
					Create a Post!
				</Header>
				<Form size="large" onSubmit={handleSubmit}>
					<Segment stacked>
						<Form.Field>
							<label>Title:</label>
							<input type="text" value={title} onChange={handleTitleChange} />
						</Form.Field>

						<Form.Field>
							<label>Description:</label>
							<input
								type="text"
								value={description}
								onChange={handleDescriptionChange}
							/>
						</Form.Field>

						<Form.Field>
							<label>Content:</label>
							<textarea
								style={{ width: "100%" }}
								// overflow="hidden"
								resize="both"
								// rows="5"
								value={content}
								onChange={handleContentChange}>
								contenteditable
							</textarea>
						</Form.Field>
						{/* <Button type="submit">Submit</Button> */}
						<Button
							style={{ backgroundColor: "orange", color: "white" }}
							size="large"
							type="submit">
							Submit
						</Button>
					</Segment>
				</Form>
			</Grid.Column>
		</Grid>
	);
}