import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
// Imported Yelp object
import Yelp from '../../util/Yelp';

// Class component to be rendered to root
class App extends React.Component {
  constructor(props) {
    super(props);
// Set initial state of businesses
    this.state = {
      businesses: []
    };
// Bind the method
    this.searchYelp = this.searchYelp.bind(this);
  }
// The Yelp API parameters
  searchYelp(term, location, sortBy) {
// Access yelp api object functionality
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