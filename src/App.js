import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div>
     <AddPost/>
     <br></br>
     <Search/>
     <br></br>
     <Delete/>
<br></br>
<ViewPost/>

    </div>
  );
}

export default App;
