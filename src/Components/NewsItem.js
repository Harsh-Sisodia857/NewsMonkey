import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title, description, imageUrl,newsUrl, author, date,name} = this.props
    return (
      <div className='container'>
          <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {name}
  </span>
                <img src={!imageUrl ?"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/breaking-news-1646182289.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}.....</h5>
                    <p className="card-text">{description}.....</p>
                    <p className="card-text"><small className="text-muted">By {author?author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target = '_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
          </div>
      </div>
    )
  }
}
