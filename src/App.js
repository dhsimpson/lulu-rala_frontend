import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import RightNav from './components/RightNav';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';
import getSectionList from './config/getSectionList';

import {AppProvider} from './components/Appcontext';

function App() {
  const sectionComponents = getSectionList();
  console.log(sectionComponents.get('main'))
  const [section, setSection] = useState(0);
  useEffect(()=>{
    console.log("섹션: "+section);
    
  })
  return (
    <AppProvider value={setSection}>
      <Header />
      <Nav />
      <RightNav />
      <Switch>
        <Route exact path='/'>{sectionComponents.get('main')}</Route>
        <Route path='/:menu_id'>{sectionComponents.get(section)}</Route>
      </Switch>
      <Section />
      <Footer />
    </AppProvider>
  );
}

export default App;
