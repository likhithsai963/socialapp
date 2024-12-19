import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appStore from './utils/appStore';
import Login from './components/Login';
import Home from './components/Home';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path='/' element= {<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/create' element={<CreatePost/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
