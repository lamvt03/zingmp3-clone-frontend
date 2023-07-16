// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Public, Home, Login } from "./containers/public";
import path from "./utils/path";
import * as actions from './store/actions'
import { useEffect } from "react";
import { Album } from "./components";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])
  return (  
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.ALBUM__TITLE__PID} element={<Album/>}/>
          <Route path={path.PLAYLIST__TITLE__PID} element={<Album/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
