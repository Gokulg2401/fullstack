
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Button from './components/Button.js';
import Home from './pages/Home.js';
import Obj from './components/Obj.js';
import Array from './components/Array.js';
import Toggle from './components/Toggle.js';
import Todo from './components/Todo.js';
import Timer from './components/Timer.js';
import Form from './components/Form.js';
import Text from './components/Text.js';
import API from './components/API.js';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path='/button' element={<Button />}/>
    <Route path='/obj' element={<Obj/>}/>
    <Route path='/arr' element={<Array/>}/>
    <Route path='/tog' element={<Toggle/>}/>
    <Route path='/todo' element={<Todo/>}/>
    <Route path='/timer' element={<Timer/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/text' element={<Text/>}/>
    <Route path='/api' element={<API/>}/>
  </Routes>
  </Router>
    
    

  );
}

export default App;
