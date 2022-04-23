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
  render() {
    return (
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
            <Route path="/" element = {<News setProgress = {this.setProgress} key = "general" pagesize = {this.pageSize} country = "in" category = "general"/>}/>
            <Route path="/entertainment"  element = {<News setProgress = {this.setProgress} key = "entertainment" pagesize = {this.pageSize} country = "in" category = "entertainment"/>}/>
            <Route path="/health" element = {<News setProgress = {this.setProgress} key = "health" pagesize = {this.pageSize} country = "in" category = "health"/>}/>
            <Route path="/business"  element = {<News setProgress = {this.setProgress} key = "business" pagesize = {this.pageSize} country = "in" category = "business"/>}/>
            <Route path="/science" element = {<News setProgress = {this.setProgress} key = "science" pagesize = {this.pageSize} country = "in" category = "science"/>}/>
            <Route path="/sports" element = {<News setProgress = {this.setProgress} key = "sports" pagesize = {this.pageSize} country = "in" category = "sports"/>}/>
            <Route path="/technology" element = {<News setProgress = {this.setProgress} key = "technology" pagesize = {this.pageSize} country = "in" category = "technology"/>}/>
        </Routes>
      </Router>
    )
  }
}
