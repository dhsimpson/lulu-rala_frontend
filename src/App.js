import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import RightNav from './components/RightNav';
import Section from './components/Section';
import Footer from './components/Footer';

import './App.css';

// import {AppProvider} from './components/Appcontext';

import {componentList} from './config/SectionRoutes';

import Main from './components/sections/Main';

function App() {
  return (
    // <AppProvider value={setSection}>
    <>
      <Header />
      <Nav />
      <RightNav />
      <Switch>
        <Route exact path='/' component={Main}></Route>
        {componentList.map(data=>{
          return <Route path={`/${data.uri}`} component={data.component}/>
        })}
      </Switch>
      <Section />
      <Footer />
      </>
    // </AppProvider>
  );
}

export default App;
