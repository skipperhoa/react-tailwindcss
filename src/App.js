import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import MyProvider from './components/UseContext'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Content from "./components/Content";
import Category from "./components/Category";

function App() {
  return (
   <>
     <div className="w-full h-full bg-[#081229]">
     <MyProvider> 
          <Header />
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route index element={<Home />} />
              <Route path="category" element={<Category />}>
              {/*  <Route path=":categoryID" element={<CategoryID />} /> */}
              </Route>
              <Route path="content/:url" element={<Content />} />
          </Routes>
          <Footer />
      </MyProvider>
     </div>
   </>
  );
}

export default App;
