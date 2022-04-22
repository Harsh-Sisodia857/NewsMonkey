import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/general" element = {<News key = "general" pagesize = {this.pageSize} country = "in" category = "general"/>}/>
            <Route path="/entertainment"  element = {<News key = "entertainment" pagesize = {this.pageSize} country = "in" category = "entertainment"/>}/>
            <Route path="/health" element = {<News key = "health" pagesize = {this.pageSize} country = "in" category = "health"/>}/>
            <Route path="/business"  element = {<News key = "business" pagesize = {this.pageSize} country = "in" category = "business"/>}/>
            <Route path="/science" element = {<News key = "science" pagesize = {this.pageSize} country = "in" category = "science"/>}/>
            <Route path="/sports" element = {<News key = "sports" pagesize = {this.pageSize} country = "in" category = "sports"/>}/>
            <Route path="/technology" element = {<News key = "technology" pagesize = {this.pageSize} country = "in" category = "technology"/>}/>
        </Routes>
      </Router>
    )
  }
}
