import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Navbar from './children/NavBar';
import Saved from '../components/children/Saved';

export default () =>
  (<div>
    <Navbar />
    <Grid>
      <Row>
        <Col md={12}>
          <Saved />
        </Col>
      </Row>
    </Grid>
  </div>);
