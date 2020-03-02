import React, { Component } from 'react';
import {infura_url} from '../_private/keys';
import './App.css';
import Web3 from 'web3';

class App extends Component {

  async componentWillMount() {
    let web3 = new Web3(infura_url);
    let latestBlock = await web3.eth.getBlock('latest');
    console.log(latestBlock)
  }

  render() {
    return (
      <div>
        Test :)
      </div>
    )
  }
}

export default App;
