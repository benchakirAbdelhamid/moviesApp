import React from "react";
import Main from "./Component/Main";
import "./Component/style.css";
import {
  NavLink,
  Route,
  Routes,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import Category from "./Component/Category";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="Category">CATEGORY</NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
      {/* <Outlet /> */}
    </BrowserRouter>
  );
}

export default App;
