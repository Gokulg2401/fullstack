
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import './App.css';
// // import Button from './components/Button.js';
// // //import Home from './pages/Home.js';
// // import Obj from './components/Obj.js';
// // import Array from './components/Array.js';
// // import Toggle from './components/Toggle.js';
// // import Todo from './components/Todo.js';
// // import Timer from './components/Timer.js';
// // import Form from './components/Form.js';
// // import API from './components/API.js';
// // //import Home from './components/Home.js';


// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* <Route path="/home" element={<Home />} /> */}
// //         <Route path='/button' element={<Button />}/>
// //         <Route path='/obj' element={<Obj/>}/>
// //         <Route path='/arr' element={<Array/>}/>
// //         <Route path='/tog' element={<Toggle/>}/>
// //         <Route path='/todo' element={<Todo/>}/>
// //         <Route path='/timer' element={<Timer/>}/>
// //         <Route path='/form' element={<Form/>}/>
// //         <Route path='/api' element={<API/>}/>
        
        
// //       </Routes>
// //     </Router>
    
    

// //   );
// // }
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './page/Main';
import Header from './comp/Header';
import Landing from './comp/Landing';
import './Myapp.css';
import Checkout from './comp/Checkout';
import CategoryProducts from './comp/CategoryProducts';
import Buynow from './page/Buynow';
import Footer from './comp/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Toggletheme from './comp/Toggletheme';
const App = () => {
  const location = useLocation(); // ✅ Valid, only once
  const isInitialPage=location.pathname==='/';
  
  return (
    <>
    <div className='app-container'>
      <Header />
      <div className='page-content'>     
      <Routes>     
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/buynow" element={<Buynow />} />
       
      </Routes>
      {/* Show theme toggle + toast only on non-initial pages */}
        {!isInitialPage && <Toggletheme />}
        {!isInitialPage && (
          <ToastContainer position="top-center" autoClose={3000} />
        )}
      </div>

      {/* Show footer only on non-initial pages */}
      {!isInitialPage && <Footer />}
    </div>      
    </>
  );
};

export default App;
