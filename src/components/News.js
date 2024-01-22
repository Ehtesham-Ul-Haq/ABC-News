import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {


  constructor() {
    super();
    console.log("Hello! I am a constructor from News component");
    this.state = {
      articles: [],
      loading : false,
      page : 1
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3592f3bce758422c8739b06e69cd083a&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults});
  }


   handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3592f3bce758422c8739b06e69cd083a&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles:parsedData.articles
    })
  }

   handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3592f3bce758422c8739b06e69cd083a&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
  
      this.setState({
        page: this.state.page + 1,
        articles:parsedData.articles
      })

    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>ABC NEWS - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
                      <NewsItem  title={element.title?element.title.slice(0, 50):""} description={element.description?element.description.slice(0, 85):""} imageUrl={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2023-10/ve26g6do_hamas-1200-reuters-_625x300_10_October_23.jpg"} newsUrl={element.url} />
                  </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-danger"  onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
