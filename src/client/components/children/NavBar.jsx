import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () =>
  (<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>NYTReact</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/savedview">
        Saved Items
      </NavItem>
    </Nav>
  </Navbar>);
