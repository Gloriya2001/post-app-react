import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewPost from './components/ViewPost';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<AddPost />} />
        <Route path='/search' element={<Search />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/view' element={<ViewPost/>} />

      </Routes>


    </BrowserRouter>


  );
}

export default App;
