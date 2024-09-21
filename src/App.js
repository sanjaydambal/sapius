import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Story from './components/Story';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
   <Header/>
   <Story/>
   <Portfolio/>
    </div>
  );
}

export default App;
