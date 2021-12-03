import './App.css';
import { Container } from '@mui/material';
import Header from './Componenets/Header/Header';
import Form from './Componenets/Form/Form';
import Query from './Componenets/Query/Query';


function App() {
  return (
    <div className="App">
      <Container style={{ margin: "3em auto", width: "60%" }}>
        <Header />
        <Form />

        <Query />
      </Container>
    </div>
  );
}

export default App;
