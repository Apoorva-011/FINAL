import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Listings from './pages/Listings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Details from './pages/Details';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Sidebar />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/:id/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
