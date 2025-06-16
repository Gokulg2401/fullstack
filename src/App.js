
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

// // src/App.js

// //Project Code
// import React from 'react';
// import { Routes, Route, } from 'react-router-dom';
// import Main from './page/Main';
// import Checkout from './comp/Checkout';
// import './Myapp.css';
// import Buynow from './page/Buynow';
// import CategoryProducts from './comp/CategoryProducts';


// const App = () => (
  

//   // Show footer on all pages except "/"
//   <div className='app-container'> 
//     <Routes>
//       <Route path="/main" element={<Main />} />
//       <Route path="/category/:category" element={<CategoryProducts />} />
//       <Route path="/checkout/:id" element={<Checkout />} />
//       <Route path='/buynow' element={<Buynow/>}/>
      
//     </Routes>
    
//   </div>
  
// );

// export default App;



import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './page/Main';
import Checkout from './comp/Checkout';
import CategoryProducts from './comp/CategoryProducts';
import Buynow from './page/Buynow';
import Footer from './comp/Footer';
const App = () => {
  const location = useLocation(); // ✅ Valid, only once
  const showFooter = location.pathname !== '/';
  return (
    <>
    <div className='app-container'>
      <div className='page-content'>
      <Routes>     
        <Route path="/main" element={<Main />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      </div>
      {showFooter && <Footer />}
    </div>
    </>
  );
};

export default App;
