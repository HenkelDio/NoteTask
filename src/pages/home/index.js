import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

export default function Home() {
  return (
    <Container>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam
      </p>
      <Link to="/create">
        START
      </Link>
    </Container>
  );
}
