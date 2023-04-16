import React from "react";
import { Container, Sidebar } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";

// import NavTabs from './NavTabs';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import UserAccount from "./pages/UserAccount";
import LogIn from "./pages/LogIn";
import Signup from './pages/Signup';
import AP from "./pages/AnonymousPost"

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/AnonymousPost" element={<AP />} />
        </Routes>
      </Container>
    </div>
  );
}

export default Main;

