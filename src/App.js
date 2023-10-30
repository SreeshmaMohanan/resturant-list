import { Route,Routes,Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import View from './Pages/View';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/view/:id' element={<View/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
