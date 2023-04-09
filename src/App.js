import React, { useState } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => {
    console.log("Changing page to:", page);
    setCurrentPage(page);
  };

  return (
    <div>
      <Main currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer />
    </div>
  );
}

export default App;
