import React from "react";
import { useContext } from 'react';
import Navbar from "./components/navbar/Navbar";
import { Brightness4, Brightness7 } from '@material-ui/icons';
import Menuitem from "./components/menuitems/Menuitem";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Portforio from "./components/portforio/Portforio";
import Footer from "./components/Footer/Footer";
import { Themecontext } from './contex/theme/theme';
import BadgetContextProvider from "./contex/badget/badget";
import {Badgetcontext} from './contex/badget/badget'
function App(props) {
  const themecontext = useContext(Themecontext)
  const { Lightteme, Light, Dark } = themecontext;
  const theme = Lightteme ? Light : Dark;
  

  return (
    <BadgetContextProvider>
      <div className="App" style={{ background: theme.bg, color: theme.syntax, width: '100%', height: '100%' }}>
        <Router>
          <Navbar/>
          <Menuitem />
          <Portforio/>
          <Footer/>
        </Router>
      </div>
    </BadgetContextProvider>
  );
}

export default App;
