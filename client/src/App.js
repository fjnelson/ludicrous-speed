import React, { useState } from "react";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { Container } from 'semantic-ui-react';
import Footer from "./components/Footer";
import Main from "./components/Main";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import Home from './pages/Home';
import CreatePost from "./components/pages/CreatePost";
import UserAccount from "./components/pages/UserAccount";
import LogIn from "./components/pages/LogIn";
import NavTabs from "./components/NavTabs";
import Signup from "./components/pages/Signup";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    console.log("Changing page to:", page);
    setCurrentPage(page);
  };


  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          <Routes>
            <Route path="/create" element={<CreatePost />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={
                <Main
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
              }
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Elements>
    </ApolloProvider>
  );
}

export default App;
