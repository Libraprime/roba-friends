import Header from './Components/Header';
import CardList from './Components/CardList';
import Searchbox from './Components/Searchbox';
import { robots } from './Components/robots';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      seachField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ seachField: event.target.value})
  }

  render() {
    const robotFilter = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.seachField.toLowerCase())
    })
    console.log(robotFilter)
    return (
      <>
        <Header />
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={robotFilter} />
      </>
      
    )
  }
  }
  

export default App;
