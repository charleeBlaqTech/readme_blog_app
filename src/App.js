import { useState } from 'react';
import { Route, Routes, Navigate}  from 'react-router-dom';
import './App.css';
import UserContext from './components/BlogContext';
import Contact            from "../src/components/pages/Contact";
import Index              from "../src/components/pages/Index";
import BlogNew            from '../src/components/pages/BlogNew'
import BlogDetail         from "../src/components/pages/BlogDetails";
import Category           from "../src/components/pages/Category";
import SignIn             from './components/SignIn';
import SignUp             from './components/SignUp';



function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  

  return (
    <UserContext.Provider  value={{isLoggedIn, setIsLoggedIn}}>
    <div className="App">
      <Routes>
       
            <Route path='/blogs' element={<Index/>} />
            <Route path='/blogs/new' element={ <BlogNew/>  } />
            <Route path='/blogs/:id' element={<BlogDetail/>}/>
            <Route path='/blogs/category/:name' element={<Category/> }/>
            <Route path='/contact' element={ <Contact/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='*' element={<Navigate to="/signin"/>} />
        
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
