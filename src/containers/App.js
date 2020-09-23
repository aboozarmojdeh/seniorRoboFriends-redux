import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import "./App.css";
import CardList from "../components/Card/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll/Scroll";
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import Header from '../components/Header/Header';


import {setSearchField,requestRobots } from '../actions';

const mapStateToProps=state=>{
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
}
}

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: []
  //   };
  // }
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

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

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
              <CardList robots={filteredRobots} />
              </ErrorBoundry>
            </Scroll>
          </div>
        </Fragment>
      );
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
