import React, { Component } from 'react';
import Film from "./Film"

class App extends Component {
  state =
  {
    data: [],
  }

  componentDidMount() {
    fetch('https://video-rental-backend.herokuapp.com/api/cassettes/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data })
        }
      );
  }

  render() {
    return (
      <h1>
        {this.state.data.map(film => <Film info={film}/>)}
      </h1>
    );
  }
}

export default App;
