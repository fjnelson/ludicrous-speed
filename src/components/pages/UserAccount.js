import React from 'react';

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
    </div>
  );
}