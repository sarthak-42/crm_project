
// import Sidenav from './components/Sidenav';
import{Routes, Route, BrowserRouter} from 'react-router-dom';
import About from './components/pages/About';
import Settings from './components/pages/Settings';
import Home from './components/pages/Home';
function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path = "/" exact element={<Home/>}></Route>
    <Route path = "/about" exact element={<About/>}></Route>
    <Route path = "/settings" exact element={<Settings/>}></Route>
  </Routes>
  </BrowserRouter>
  
   </>
  );
}

export default App;
