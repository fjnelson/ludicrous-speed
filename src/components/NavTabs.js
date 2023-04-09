import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
<Menu inverted style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Menu.Item header>Hello Stranger (image)</Menu.Item>
  <Menu.Menu id='menu-items'>
    <Menu.Item
      name='Home'
      active={currentPage === 'Home'}
      onClick={() => handlePageChange('Home')}
    />
    <Menu.Item
      name='Create Post'
      active={currentPage === 'Create'}
      onClick={() => handlePageChange('Create')}
    />
    <Menu.Item
      name='User Accounts'
      active={currentPage === 'UserAccount'}
      onClick={() => handlePageChange('UserAccount')}
    />
  </Menu.Menu>
  <Menu.Item
    name='Login'
    active={currentPage === 'LogIn'}
    onClick={() => handlePageChange('LogIn')}
    id='login'
  />
</Menu>
  );
}