import React from 'react';
import ReactDOM from 'react-dom/client';
import About from '../src/component/about';
import Home from '../src/component/home';
import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom'
import Courses from './component/courses';
import Tab1 from './component/tab1';
import Tab2 from './component/tab2';
import Content from './component/content';
import Dashboard from './component/dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
      <Route path='/home' element={<Navigate replace to="/"/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}>
        <Route path='tab1' element={<Tab1/>}>
          <Route path=':id' element={<Content/>}/>
        </Route>
        <Route path='tab2' element={<Tab2/>}/>
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Home/>}/>
      
    </Routes>
  </Router>

);



