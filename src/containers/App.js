import React, { Component } from "react";
import {connect} from 'react-redux';
import "./App.css";

import MainPage from '../components/MainPage/MainPage';

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
    return <MainPage {...this.props}/>
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
