import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
    };

    // Binding the function to the component instance
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    const { mode } = this.state;

    if (mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = 'rgb(5 38 22)';

    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
    }
  }  


  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
  
    
    return (
      <div>
        <Router>
          <NavBar toggleMode={this.toggleMode} />
          <LoadingBar
            height={3}
            color='#ff7c05'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="general" pageSize={this.pageSize} mode={this.state.mode} country="in" category="general" />} />
            <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Business" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Entertainment" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Entertainment" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Science" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Sports" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Sports" />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Health" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Health" />} />
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key="Technology" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
