import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f6efa7258742451cb7731e0b0807d15e&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ 
      articles: parsedData.articles,
      totalResults : parsedData.totalResults,
      loading : false
    })
    console.log(this.state.totalResults);
}
handlePrevClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f6efa7258742451cb7731e0b0807d15e&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState ({
        page : this.state.page - 1,
        articles: parsedData.articles,
        loading : false
  })
}
handleNextClick = async () =>{
  if(this.state.page > Math.ceil(this.state.totalResults)/this.props.pagesize){
    console.log("page ended");
  }
  else{
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f6efa7258742451cb7731e0b0807d15e&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState ({
    page : this.state.page+1,
    articles: parsedData.articles,
    loading : false
  })
}
console.log(this.state.page);
}
  render() {
    return (
        <>
      <div className="container my-3">
        <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
       <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div key = {element.url} className="col-md-3 m-3">
          <NewsItem title = {element.title ? element.title.slice(0,45):""} imageUrl = {element.urlToImage} description = {element.description ? element.description.slice(0,45): ""} newsUrl = {element.url}/>
          </div>
        })}          
        </div>
       </div>
       <div className="container d-flex justify-content-between">
       <button type="button" onClick={this.handlePrevClick} className="btn btn-dark" style={{visibility: this.state.page === 1 ?  "hidden" : "visible"}}>&laquo;  Previous</button>
        <button type="button" onClick={this.handleNextClick} className="btn btn-dark" style={{visibility: (this.state.page > Math.ceil(this.state.totalResults)/this.props.pagesize) ?  "hidden" : "visible"}} >Next &raquo; </button>
       </div>

      </>
    )
  }
}
