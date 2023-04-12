import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
  },
]

const DropdownExampleInline = () => (
  <div style={{ height: "100vh" }}>
    <h1>User Account</h1>
    <span>
      Show me posts by{' '}
      <Dropdown
        inline
        options={friendOptions}
        defaultValue={friendOptions[0].value}
      />
    </span>
    <br />
    <br />
    <Link to="/">Go back to home page</Link>
  </div>
)

export default DropdownExampleInline;




// export default function UserAccount(props) {
//   const { name, postHistory } = props;

//   return (
//     <div style={{ height: "100vh" }}>
//       <h1>{name}</h1>
//       <h2>Post History:</h2>
//       <ul>
//         {postHistory.map((post, index) => (
//           <li key={index}>{post}</li>
//         ))}
//       </ul>
//       <Link to="/">Go back to home page</Link>
//     </div>
//   );
// }