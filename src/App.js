import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row/>
      <Footer/>
    </div>
  );
}

export default App;
