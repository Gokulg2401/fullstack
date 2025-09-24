//  //import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import './App.css';
// // // import Button from './components/Button.js';
// // // //import Home from './pages/Home.js';
// // // import Obj from './components/Obj.js';
// // // import Array from './components/Array.js';
// // // import Toggle from './components/Toggle.js';
// // // import Todo from './components/Todo.js';
// // // import Timer from './components/Timer.js';
// // // import Form from './components/Form.js';
// // // import API from './components/API.js';
// // // //import Home from './components/Home.js';

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* <Route path="/home" element={<Home />} /> */}
// // //         <Route path='/button' element={<Button />}/>
// // //         <Route path='/obj' element={<Obj/>}/>
// // //         <Route path='/arr' element={<Array/>}/>
// // //         <Route path='/tog' element={<Toggle/>}/>
// // //         <Route path='/todo' element={<Todo/>}/>
// // //         <Route path='/timer' element={<Timer/>}/>
// // //         <Route path='/form' element={<Form/>}/>
// // //         <Route path='/api' element={<API/>}/>

// // //       </Routes>
// // //     </Router>

// // //   );
// // // }
// //Project code
// import React from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Main from "./page/Main";
// import Header from "./comp/Header";
// import Landing from "./comp/Landing";
// import "./Myapp.css";
// import CategoryProducts from "./comp/CategoryProducts";
// import Buynow from "./page/Buynow";
// import ThankYou from "./page/ThankYou";
// import Footer from "./comp/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Toggletheme from "./comp/Toggletheme";
// import ProductDetails from "./comp/ProductDetails";
// import Cart from "./comp/Cart";
// import Back from './comp/Back';
// import Login from './comp/Login';
// import Register from "./comp/Register";
// const App = () => {
//   const location = useLocation();
//   const isInitialPage = location.pathname === "/";
//   const isLoginPage = location.pathname === "/" || location.pathname === "/login";
//   const isLandingPage = location.pathname === "/landing";
//   const isRegisterPage = location.pathname === "/register";
  
//   // Pages that should only show toggle theme (no header/footer)
//   const isMinimalLayout = isLandingPage || isRegisterPage || isLoginPage;

//   return (
    
//       <div className="app-container">
//         {!isMinimalLayout && <Header />}
//         <Toggletheme />

//         <div className="page-content">
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/landing" element={<Landing />} />
//             <Route path="/main" element={<Main />} />
//             <Route path="/category/:category" element={<CategoryProducts />} />
//             <Route path="/product/:id" element={<ProductDetails />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/buynow" element={<Buynow />} />
//             <Route path="/thank-you" element={<ThankYou />} />
//           </Routes>
//         </div>

//         {!isInitialPage && !isMinimalLayout && (
//           <>
            
//             <ToastContainer position="top-center" autoClose={3000} />
//             <Back />
//             <Footer />
            

//           </>
//         )}
//       </div>
    
//   );
// };

// export default App;

//Nostra Assessment code
// import React, { useState, useEffect } from "react";
// import "./NotionApp.css";

// const quotes = [
//   {
//     text: "So many books, so little time.",
//     author: "Frank Zappa",
//     book: ""
//   },
//   {
//     text: "A room without books is like a body without a soul.",
//     author: "Marcus Tullius Cicero",
//     book: ""
//   },
//   {
//     text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
//     author: "Mark Twain",
//     book: "Notebook"
//   },
//   {
//     text: "Books are a uniquely portable magic.",
//     author: "Stephen King",
//     book: "On Writing"
//   },
//   // Add more quotes here
//   {
//     text: "I have always imagined that Paradise will be a kind of library.",
//     author: "J.R.R. Tolkien",
//     book: "The Hobbit"
//   },
//   {
//     text: "There is no friend as loyal as a book.",
//     author: "Ernest Hemingway",
//     book: "The Old Man and the Sea"
//   },
//   {
//     text: "Books are mirrors: you only see in them what you already have inside you.",
//     author: "Carlos Ruiz Zafón",
//     book: "The Shadow of the Wind"
//   },
//   {
//     text: "A good book is an event in my life.",
//     author: "Stieg Larsson",
//     book: "The Girl with the Dragon Tattoo"
//   },
//   {
//     text: "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
//     author: "Groucho Marx",
//     book: ""
//   },
//   {
//     text: "Books are the plane, the train, and the road. They are the equivalent of a canvas, a music sheet, and a piano.",
//     author: "Anton Chekhov",
//     book: "The Cherry Orchard"
//   }
  
// ];

// function App() {
//   const [index, setIndex] = useState(0);
//   const [transition, setTransition] = useState("fade-in");
//   const [autoPlay, setAutoPlay] = useState(true);

//   useEffect(() => {
//     if (!autoPlay) return;
//     const timer = setTimeout(() => {
//       handleChange((index + 1) % quotes.length, "fade-in");
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [index, autoPlay]);

//   function handleChange(newIndex, effect) {
//     setTransition("fade-out");
//     setTimeout(() => {
//       setIndex(newIndex);
//       setTransition(effect);
//     }, 400);
//     setAutoPlay(false);
//   }

//   function handlePrev() {
//     handleChange((index - 1 + quotes.length) % quotes.length, "fade-in");
//   }
//   function handleNext() {
//     handleChange((index + 1) % quotes.length, "fade-in");
//   }

//   return (
//     < div className="Header">
//       <h1>Quote Shorts</h1>
//       <p>Discover a world of wisdom in every quote.</p>

//     <div className="quote-shorts-container">
//       <div className={`quote-card ${transition}`}>
//         <blockquote>{quotes[index].text}</blockquote>
//         <div className="meta">
//           <span className="author">{quotes[index].author}</span>
//           {quotes[index].book && (
//             <span className="book"> | {quotes[index].book}</span>
//           )}
//         </div>
//       </div>
//       <div className="controls">
//         <button onClick={handlePrev}>&#8592; Prev</button>
//         <button onClick={handleNext}>Next &#8594;</button>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default App;


//Nostra 2nd assessment code
import React, { useState, useEffect, useMemo } from "react";
import "./Assessment.css";

const columns = [
  { key: "Title", label: "Title" },
  { key: "Author", label: "Author" },
  { key: "Genre", label: "Genre" },
  { key: "PublishedYear", label: "Published Year" },
  { key: "ISBN", label: "ISBN" },
];

// Basic CSV parsing: converts CSV text to array of objects
function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map(line => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, i) => {
      obj[header.trim()] = values[i]?.trim() || "";
    });
    return obj;
  });
}

// Basic CSV stringification from array of objects
function stringifyCSV(data) {
  if (!data.length) return "";
  const headers = Object.keys(data[0]);
  const rows = data.map(row =>
    headers.map(h => `"${(row[h] || "").replace(/"/g, '""')}"`).join(",")
  );
  return [headers.join(","), ...rows].join("\n");
}

function App() {
  const [originalData, setOriginalData] = useState([]);
  const [editedData, setEditedData] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortConfig, setSortConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const parsed = parseCSV(event.target.result);
      setOriginalData(parsed);
      setEditedData(parsed);
      setFilters({});
      setSortConfig(null);
      setIsLoading(false);
    };
    reader.readAsText(file);
  }

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCellChange = (rowIndex, key, value) => {
    setEditedData((prev) => {
      const newData = [...prev];
      newData[rowIndex] = { ...newData[rowIndex], [key]: value };
      return newData;
    });
  };

  const resetEdits = () => {
    setEditedData(originalData);
    setFilters({});
    setSortConfig(null);
  };

  const sortedData = useMemo(() => {
    if (!editedData) return [];
    const sortableData = [...editedData];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if ((a[sortConfig.key] || "") < (b[sortConfig.key] || ""))
          return sortConfig.direction === "asc" ? -1 : 1;
        if ((a[sortConfig.key] || "") > (b[sortConfig.key] || ""))
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableData;
  }, [editedData, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter(row =>
      columns.every(({ key }) =>
        !filters[key] || (row[key] || "").toString().toLowerCase().includes(filters[key].toLowerCase())
      )
    );
  }, [sortedData, filters]);

  const downloadCSV = () => {
    const csv = stringifyCSV(editedData);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "edited_books.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const isCellEdited = (rowIndex, key) => {
    if (!originalData[rowIndex]) return false;
    return originalData[rowIndex][key] !== editedData[rowIndex][key];
  };

  return (
    <div className="container">
      <h1>Book CSV Editor (Minimal)</h1>

      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {isLoading && <p>Loading CSV...</p>}

      {!!editedData.length && (
        <>
          <div className="controls">
            <button onClick={resetEdits}>Reset Edits</button>
            <button onClick={downloadCSV}>Download CSV</button>
            <p>{filteredData.length} of {editedData.length} records shown</p>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {columns.map(({ key, label }) => (
                    <th key={key}>
                      {label}
                      <button
                        className="sort-btn"
                        onClick={() => {
                          let direction = "asc";
                          if (sortConfig?.key === key && sortConfig?.direction === "asc")
                            direction = "desc";
                          setSortConfig({ key, direction });
                        }}
                      >
                        {sortConfig?.key === key
                          ? sortConfig.direction === "asc"
                            ? "▲"
                            : "▼"
                          : "↕"}
                      </button>
                      <br />
                      <input
                        type="text"
                        placeholder="Filter"
                        value={filters[key] || ""}
                        onChange={e => handleFilterChange(key, e.target.value)}
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => (
                  <tr key={idx}>
                    {columns.map(({ key }) => (
                      <td key={key} className={isCellEdited(idx, key) ? "edited-cell" : ""}>
                        <input
                          value={editedData[idx][key] || ""}
                          onChange={e => handleCellChange(idx, key, e.target.value)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
