//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/OneProduct';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route element={<Main/>} exact path="/Products"/>
            <Route element={<OneProduct/>} exact path="/Products/:id" />
            <Route element={<UpdateProduct/>} exact path="/Products/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
