import React, { Component, Fragment } from "react";

import "./MainPage.css";
import CardList from "../Card/CardList";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Header from '../Header/Header';




class MainPage extends Component {
  
  //////////////async AXIOS Call ///////////////////////////
  // getUser = async (event) => {
  //   try {
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );

  //     const users = response.data;
  //     this.setState({ robots: users });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  componentDidMount() {


    this.props.onRequestRobots();
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;

    

    if (isPending) {
      return (
        <Fragment>
        <div className="tc">
        <Header />
        <SearchBox onSearchChange={onSearchChange} />
        <Scroll>
              <ErrorBoundry>
              <h1 className="f1 app-header-text">Loading!</h1>
              </ErrorBoundry>
            </Scroll>
      
      </div>
      </Fragment>
      
      );
    } else {
      return (
        <Fragment>
          <div className="tc">
          <Header />
            <SearchBox onSearchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
              </ErrorBoundry>
            </Scroll>
          </div>
        </Fragment>
      );
    }
  }
}

export default MainPage;
