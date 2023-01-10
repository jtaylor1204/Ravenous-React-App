import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <h2>To see this app's functionality, please visit the <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank">CORS webpage</a> and click, "request temporary access to demo server." Enjoy!</h2>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
        <footer>This app was coded by <a href="https://jaidataylor.tech">Jaida Taylor</a> and is <a href="https://github.com/jtaylor1204/Ravenous-React-App">open-sourced.</a> </footer>
      </div>
    );
  }
}

export default App;