import React from 'react';
import { Link } from 'react-router-dom';

export default function UserAccount(props) {
  const { name, postHistory } = props;

  return (
    <div style={{ height: "100vh" }}>
      <h1>{name}</h1>
      <h2>Post History:</h2>
      <ul>
        {/* {postHistory.map((post, index) => (
          <li key={index}>{post}</li>
        ))} */}
      </ul>
      <Link to="/">Go back to home page</Link>
    </div>
  );
}