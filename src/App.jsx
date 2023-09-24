import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Menu from './components/Menu';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
