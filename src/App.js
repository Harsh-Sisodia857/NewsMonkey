import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress,setProgress] = useState(0)
  const pageSize = 15;
  const apiKey = "39f82ee2fc3146c2b0b0865265985cdf"
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
            <Route path="/" element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "general" pagesize = {pageSize} country = "in" category = "general"/>}/>
            <Route path="/entertainment"  element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "entertainment" pagesize = {pageSize} country = "in" category = "entertainment"/>}/>
            <Route path="/health" element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "health" pagesize = {pageSize} country = "in" category = "health"/>}/>
            <Route path="/business"  element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "business" pagesize = {pageSize} country = "in" category = "business"/>}/>
            <Route path="/science" element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "science" pagesize = {pageSize} country = "in" category = "science"/>}/>
            <Route path="/sports" element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "sports" pagesize = {pageSize} country = "in" category = "sports"/>}/>
            <Route path="/technology" element = {<News setProgress =  {setProgress} apiKey = {apiKey} key = "technology" pagesize = {pageSize} country = "in" category = "technology"/>}/>
        </Routes>
      </Router>
    )
  }

  export default App
