import React, { useState } from 'react';
import './App.css';
import { Container } from '@mui/material';
import Header from './Componenets/Header/Header';
import Form from './Componenets/Form/Form';
import Query from './Componenets/Query/Query';


function App() {
  const [post, setPost] = useState({ movie: "", rating: "", duration: "" })

  return (
    <div className="App">
      <Container style={{ margin: "3em auto", width: "60%" }}>
        <Header />
        <Form post={post} setPost={setPost} />

        <Query post={post} />
      </Container>
    </div>
  );
}

export default App;
