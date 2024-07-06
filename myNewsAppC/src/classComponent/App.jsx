import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
  }

  changeLanguage = (data) => {
    this.setState({ language: data });
  };

  changeSearch = (data) => {
    this.setState({ search: data });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar
          changeLanguage={this.changeLanguage}
          changeSearch={this.changeSearch}
        />
        <Routes>
          <Route
            path=""
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "All"}
              />
            }
          />
          <Route
            path="/All"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "All"}
              />
            }
          />
          <Route
            path="/Latestnews"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "Latest News"}
              />
            }
          />
          <Route
            path="/India"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "India"}
              />
            }
          />
          <Route
            path="/World"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "World"}
              />
            }
          />
          <Route
            path="/Stock"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "Stock"}
              />
            }
          />
          <Route
            path="/Sports"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "Sports"}
              />
            }
          />
          <Route
            path="/Science"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "Science"}
              />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "Entertainment"}
              />
            }
          />
          <Route
            path="/Education"
            element={
              <Home
                language={this.state.language}
                q={this.state.search ? this.state.search : "Education"}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
