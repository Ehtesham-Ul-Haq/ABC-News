import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello! I am a constructor from News component");
    this.state = {
      articles: [],
      loading : false,
      page : 1,
      totalResults : 0
    }
    document.title = `ABC News - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3592f3bce758422c8739b06e69cd083a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
       articles:parsedData.articles,
       totalResults: parsedData.totalResults,
       loading: false
      });
  }

  async componentDidMount() {
    
    this.updateNews();
  }


   handlePrevClick = async () => {

    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

   handleNextClick = async () => {

    this.setState({page: this.state.page + 1});
    this.updateNews();
  }


  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=3592f3bce758422c8739b06e69cd083a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
       articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults,
      })
  };

  render() {


    return (
      <div className='container my-3'>
        <h1 className="text-center" style={{ color: this.props.mode === 'dark' ? '#ffffff' : '#000000', margin: '35px 0px', fontFamily: 'Noto Sans'}}>
          ABC NEWS - {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {!this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          >
          <div className="container">

          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0, 50):""} description={element.description?element.description.slice(0, 85):""}
                        imageUrl={element.urlToImage?element.urlToImage:"https://c.ndtvimg.com/2023-10/ve26g6do_hamas-1200-reuters-_625x300_10_October_23.jpg"} 
                        newsUrl={element.url} mode={this.props.mode} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
            })}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-danger"  onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}
