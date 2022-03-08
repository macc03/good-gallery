import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import ScrollMenu from './components/scroll-menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/t/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
