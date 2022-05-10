import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/common.css';
import Main from './views/Main/Main';
import Wallpapers from './views/t/Wallpapers';
import Editorial from './views/Editorial';
import Login from './views/Login';

function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<Editorial />} />
            <Route path='/t/Wallpapers' element={<Wallpapers />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
