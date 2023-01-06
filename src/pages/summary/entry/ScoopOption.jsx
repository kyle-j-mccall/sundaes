import React from 'react';
import { Col } from 'react-bootstrap';

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col xs={12} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop`} />
    </Col>
  );
}
