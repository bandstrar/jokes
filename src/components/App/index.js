import React, { Component } from 'react';
import getJokes from '../../helpers/data/getJokes';
import Setup from '../Setup';
import Punchline from '../Punchline';
import jokeShape from '../../helpers/propz/jokeShape';
import '../../App/App.scss';

class App extends Component {
  static propTypes = {
    joke: jokeShape,
  }

    state = {
      joke: {},
      showSetup: false,
      showPunchline: false,
    }

    componentDidMount() {
      getJokes.getJokes().then((resp) => {
        this.setState({
          joke: resp,
        });
      });
    }

    showSetupJoke = () => {
      this.setState({
        showSetup: true,
      });
    }

    showPunchlineJoke = () => {
      this.setState({
        showPunchline: true,
      });
    }

    resetJoke = () => {
      getJokes.getJokes().then((resp) => {
        this.setState({
          joke: resp,
          showPunchline: false,
        });
      });
    }

    render() {
      const { showSetup, showPunchline, joke } = this.state;
      return (
            <div className="App">
      <img src="https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png" className="card-img-top" alt="..." />

      <div className="card-body">
      {showSetup ? (<Setup setup={joke.setup}/>) : (null)}

      {showPunchline ? (<Punchline punchline={joke.punchline}/>) : (null)}

      {!showSetup && !showPunchline ? (
        <button className='btn btn-dark setup' onClick={this.showSetupJoke}>Get a Joke</button>
      ) : (null)}

      {showSetup && !showPunchline ? (<button className='btn btn-dark punchline' onClick={this.showPunchlineJoke}>Get Punchline</button>) : (null)}

        {showPunchline ? (<button className='btn btn-dark newjoke' onClick={this.resetJoke}>Get a New Joke</button>) : (null)}
        </div>
            </div>
      );
    }
}

export default App;
