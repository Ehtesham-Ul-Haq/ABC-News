import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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

  render() {
  
  
    return (
      <div>
        <Router>
          <NavBar toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} mode={this.state.mode} country="in" category="general" />} />
            <Route exact path="/Business" element={<News key="Business" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Entertainment" />} />
            <Route exact path="/Science" element={<News key="Science" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News key="Sports" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Sports" />} />
            <Route exact path="/Health" element={<News key="Health" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Health" />} />
            <Route exact path="/Technology" element={<News key="Technology" pageSize={this.pageSize} mode={this.state.mode} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
