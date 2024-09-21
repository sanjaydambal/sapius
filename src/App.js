import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import Portfolio from './components/Portfolio';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Accordion from './components/Accordion'

function App() {
  return (
    <div className="App">
   <Header/>
   <Story/>
   <Portfolio/>
   <Accordion/>
    </div>
  );
}

export default App;
