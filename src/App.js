// CSS
import './App.css';
// ROUTER
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// PAGES
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import CardDetails from './pages/CardDetails/CardDetails';
import Page404 from './pages/Page404/Page404';
// COMPONENTS
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/carddetails/:id' element={<CardDetails/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
