import { Route,Routes,Router } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
