import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Menu inverted>
      <Menu.Item header>Hello Stranger</Menu.Item>
      <Menu.Item name='Home' active={currentPage === 'Home'} onClick={() => handlePageChange('Home')} />
      <Menu.Item name='Create Post' active={currentPage === 'Create'} onClick={() => handlePageChange('Create')} />
      <Menu.Item name='User Accounts' active={currentPage === 'UserAccount'} onClick={() => handlePageChange('UserAccount')} />
      <Menu.Menu position='right'>
        <Menu.Item name='Login' active={currentPage === 'LogIn'} onClick={() => handlePageChange('LogIn')} />
      </Menu.Menu>
    </Menu>
  );
}







