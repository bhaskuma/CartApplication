
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Card from './component/Card';
import CardDetails from './component/CardDetails';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/cart' element={<CardDetails />} />
        <Route path='/cart/:id' element={<CardDetails />} />

      </Routes>

    </>
  );
}

export default App;
