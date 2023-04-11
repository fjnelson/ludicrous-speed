import React, { useState } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Footer from "./components/Footer";
import Main from "./components/Main";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    console.log("Changing page to:", page);
    setCurrentPage(page);
  };

  return (
    <div>
      <Elements stripe={stripePromise}>
        <Main currentPage={currentPage} handlePageChange={handlePageChange} />
        <Footer />
      </Elements>
    </div>
  );
}

export default App;
