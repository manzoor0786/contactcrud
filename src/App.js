
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import './App.css';
// import Company from './components/Company';

// function App() {
//   return (
//     <div className="App">
//    <BrowserRouter>
//    <Routes>
//     <Route path='/' element={<Company></Company>}></Route>
//    </Routes>
//    </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Company from './components/Company'
// import { Provider } from 'react-redux';
// import compstore from './Redux/Store';
// import { ToastContainer } from 'react-toastify';
// import { Home } from './Pages/Home';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <Provider store={compstore}>
//     <BrowserRouter>

//       <Routes>
//        <Route path='/company' element={<Company></Company>}></Route>
//        <Route path='/' element={<Home></Home>}></Route>

//       </Routes>
//       <Footer></Footer>
//     </BrowserRouter>
//     <ToastContainer position='top-right'></ToastContainer>
//     </Provider>
//   );
// }

// export default App;

import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import { Home } from "./Pages/Home";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
          <Route path='/create' element={<Create></Create>}/>
        
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;