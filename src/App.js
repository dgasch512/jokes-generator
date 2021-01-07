import React from 'react';
import './App.css';
import CardList from "./components/CardList";
import HeadBar from "./components/HeadBar";
import { jokes } from "./jokes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: jokes
    }

  }

  render() {
    return (
      <div>
        <HeadBar />
        <CardList jokes={this.state.jokes}/>
      </div>

    );
  }
}

export default App;
