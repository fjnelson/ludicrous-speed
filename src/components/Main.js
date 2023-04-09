import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import UserAccount from './pages/UserAccount';
import LogIn from './pages/LogIn';

function Main({ currentPage, handlePageChange }) {
    let renderedPage;
  
    switch (currentPage) {
      case 'Home':
        renderedPage = <Home />;
        break;
      case 'Create':
        renderedPage = <CreatePost />;
        break;
      case 'UserAccount':
        renderedPage = <UserAccount />;
        break;
      case 'LogIn':
        renderedPage = <LogIn />;
        break;
      default:
        renderedPage = <div>This is not a valid page</div>;
        break;
    }
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <Container>
          {renderedPage}
        </Container>
      </div>
    );
  }

export default Main;