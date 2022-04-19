import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from './components/landing/header/Navbar.js';
import useEagerConnect from './hooks/useEagerConnect'
import FreeRoulette from './components/FreeRoulette/FreeRoulette';
import MoroccoGod from './components/MoroccoGod/MoroccoGod';
import UnderService from './components/UnderService';
import Sidebar from './components/sidebar/Sidebar';
import Glossary from './components/glossary/Glossary';
import Evanglism from './components/evangelism/Evanglism';
import MiningBank from './components/miningBank/miningBank';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [navActive, setNavActive] = useState(false);
  useEagerConnect()
  return (
    <>
      <Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Navbar navActive={navActive} setNavActive={setNavActive} />
        {/* <Audit/> */}
        <Switch>
          {/* <Route exact path='/navbar' component={Navbar} /> */}
          <Route exact path='/'><MoroccoGod active={navActive} /></Route>
          <Route exact path='/underService' ><UnderService active={navActive} /></Route>
          <Route exact path='/sidebar' component={Sidebar} />
          <Route exact path='/evanglism'><Evanglism active={navActive} /></Route>
          <Route exact path='/freeroutlet' ><FreeRoulette active={navActive} /></Route>
          <Route exact path='/glossary'  ><Glossary active={navActive} /></Route>
          <Route exact path='/miningBank'  ><MiningBank active={navActive} /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
