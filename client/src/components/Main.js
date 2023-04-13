import React from "react";
import { Container } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
// import NavTabs from './NavTabs';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import UserAccount from "./pages/UserAccount";
import LogIn from "./pages/LogIn";

function Main({ currentPage, handlePageChange }) {
  return (
    <div>
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/user-account" element={<UserAccount />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Container>
    </div>
  );
}

export default Main;
