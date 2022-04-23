import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true)
    props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(80);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
    console.log("Update is Calling",loading, totalResults);
}

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    console.log("Fetch is called",loading)
};
  useEffect(() => {
    document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  },[])
  

    return (
      <>
          <h2 className="text-center" style={{marginTop : "80px"}}>
            NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
          </h2>
          {loading && <Spinner/>}
          <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner/>}
            >
              <div className="container">
          <div className="row">
              {articles.map((element,index) => {
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


News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News