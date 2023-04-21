
// import { useState } from 'react';
import { Route, Routes }  from 'react-router-dom';
import './App.css';
import Contact            from "../src/components/pages/Contact";
import Index              from "../src/components/pages/Index";
import BlogNew            from '../src/components/pages/BlogNew'
import BlogDetail         from "../src/components/pages/BlogDetails";
import Category           from "../src/components/pages/Category"


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/blogs' element={<Index/>} />
        <Route path='/blogs/new' element={<BlogNew/>} />
        <Route path='/blogs/:id' element={<BlogDetail/>}/>
        <Route path='/blogs/category/:name' element={<Category/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
