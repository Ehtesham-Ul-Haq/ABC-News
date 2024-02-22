import React, { Component } from 'react'


export default class NewsItem extends Component {


  render() {
    
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: '20rem', height: '30rem', backgroundColor: '#e8ebee'}}  >
        <span className="badge text-bg-danger position-absolute top-0 end-0" style={{borderRadius: '0px 5px 0px 0px'}}>{source}</span>
          <img src={imageUrl} className="card-img-top" style={{height: '43%'}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">by {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-danger">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
