import React from 'react';
import './App.css';
import CardList from "./components/CardList";
import HeadBar from "./components/HeadBar";
import { jokes } from "./jokes";
import { Layout } from './styles/Layout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: jokes
    }
  }

  render() {
    return (
      
        <Layout>
          <HeadBar />
          <CardList jokes={this.state.jokes}/>
        </Layout>


    );
  }
}

export default App;
