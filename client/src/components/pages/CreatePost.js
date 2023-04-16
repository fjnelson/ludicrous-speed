import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Content:', content);
    // Add your code to submit the form data to the server here
    // After the data is submitted, navigate to the home page
    navigate('/');
  };

  return (
    <div style={{ height: '100vh' }}>
      <h1>Create Post</h1>
      <p>What's on your mind?</p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </Form.Field>

        <Form.Field>
          <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </Form.Field>

        <Form.Field>
          <label>Content:</label>
          {/* control how high the text box is, currently 30 */}
          {/* control how wide the text box is, currently 50% */}
          <textarea style={{ width: '50%' }} rows='30' value={content} onChange={handleContentChange}></textarea>
        </Form.Field>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
}