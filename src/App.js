import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import Portfolio from './components/Portfolio';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Accordion from './components/Accordion';
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
   <Header/>
   <Story/>
   <Portfolio/>
   <Accordion/>
   <Footer/>
    </div>
    </Router>
  );
}

export default App;
