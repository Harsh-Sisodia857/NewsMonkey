import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults : 0
    };
    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`;
    console.log("Constructor is Calling",this.state.loading);

  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6efa7258742451cb7731e0b0807d15e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.setProgress(20);
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(80);
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false, 
    })
    this.props.setProgress(100);
    console.log("Update is Calling",this.state.loading, this.state.totalResults);
}

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f6efa7258742451cb7731e0b0807d15e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
    })
    console.log("Fetch is called",this.state.loading)
};

  async componentDidMount() {
   this.updateNews();
  }

  render() {
    return (
      <>
          <h2 className="text-center">
            NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
          </h2>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
          <div className="row">
              {this.state.articles.map((element,index) => {
                return (<div key={index} className="col-md-3 m-3">
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      imageUrl={element.urlToImage}
                      description={
                        element.description
                          ? element.description.slice(0, 45)
                          : ""
                      }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      name={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
            </InfiniteScroll>
       
      </>
    );
  }
}
