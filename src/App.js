// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Public, Home, Login, Album, Search } from "./containers/public";
import path from "./utils/path";
import * as actions from './store/actions'
import { useEffect } from "react";
import { WeekChart, ZingChart, SearchAll } from "./components";


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
          <Route path={path.WEEKCHART_TITLE_PID} element={<WeekChart/>}/>
          <Route path={path.ZINGCHART} element={<ZingChart/>}/>
          <Route path={path.SEARCH} element={<Search/>}>
            <Route path={path.ALL} element={<SearchAll/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
