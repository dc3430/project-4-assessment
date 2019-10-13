import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CirclesSelector from './components/CircleSelector/CircleSelector';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedCircle: 1
    };
  }

  handleChangeCircle = (CircleNumber) => {
    this.setState({selectedCircle: CircleNumber});
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CirclesSelector
            selectedCircle={this.state.selectedCircle}
            handleChangeCircle={this.handleChangeCircle}
          />
          <Circles selectedCircle={this.state.selectedCircle} />        
          </main>
      </div>
    );
  }


}

export default App;