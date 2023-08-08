import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/layouts/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import ProjectInfo from './pages/subpages/ProjectInfo';
import ProjectList from './pages/subpages/ProjectList';
import PortfolioLayout from './pages/layouts/PortfolioLayout';
import ProjectDescription from './pages/subpages/ProjectDescription';


export default function App() : JSX.Element {
  return (
    <>
    <BrowserRouter basename='/portfolio'>
    {/* <BrowserRouter basename='/CherryChiriko/portfolio'> */}
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />

          <Route path="projects" element={<PortfolioLayout />} >
            <Route index element={<Portfolio />}/>
            <Route path=":id" element={<ProjectInfo />} />
            <Route path="list" element={<ProjectList />} />            
            <Route path=":id/description" element={<ProjectDescription />} />
          </Route>
          
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
