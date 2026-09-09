import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  color: mediumseagreen;
  font-size: 2rem;
`;

function Home() {
  return <Title>Home Page</Title>;
}

function About() {
  return <Title>About Page</Title>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;