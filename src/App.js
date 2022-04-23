import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({progress : progress})
  }
  pageSize = 15;
  apiKey = "39f82ee2fc3146c2b0b0865265985cdf"
  render() {
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
            <Route path="/" element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "general" pagesize = {this.pageSize} country = "in" category = "general"/>}/>
            <Route path="/entertainment"  element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "entertainment" pagesize = {this.pageSize} country = "in" category = "entertainment"/>}/>
            <Route path="/health" element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "health" pagesize = {this.pageSize} country = "in" category = "health"/>}/>
            <Route path="/business"  element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "business" pagesize = {this.pageSize} country = "in" category = "business"/>}/>
            <Route path="/science" element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "science" pagesize = {this.pageSize} country = "in" category = "science"/>}/>
            <Route path="/sports" element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "sports" pagesize = {this.pageSize} country = "in" category = "sports"/>}/>
            <Route path="/technology" element = {<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key = "technology" pagesize = {this.pageSize} country = "in" category = "technology"/>}/>
        </Routes>
      </Router>
    )
  }
}
