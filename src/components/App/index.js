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

    randomJoke = () => {
      getJokes.getJokes().then((resp) => {
        this.setState({
          joke: resp,
        });
      });
    }

    generalJoke = () => {
      getJokes.getGeneralJoke().then((resp) => {
        this.setState({
          joke: resp,
        });
      });
    }

    programmingJoke = () => {
      getJokes.getProgrammingJoke().then((resp) => {
        this.setState({
          joke: resp,
        });
      });
    }

    knockJoke = () => {
      getJokes.getKnockJoke().then((resp) => {
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
          joke: {},
          showSetup: false,
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
      {showSetup && (<Setup setup={joke.setup}/>)}

      {showPunchline && (<Punchline punchline={joke.punchline}/>)}

        {!showSetup && !showPunchline
          && (<button className='btn btn-dark random' onClick={() => { this.randomJoke(); this.showSetupJoke(); }}>Get a Random Joke</button>)}
        {!showSetup && !showPunchline
          && (<button className='btn btn-dark general' onClick={() => { this.generalJoke(); this.showSetupJoke(); }}>Get a General Joke</button>)}
        {!showSetup && !showPunchline
          && (<button className='btn btn-dark programming' onClick={() => { this.programmingJoke(); this.showSetupJoke(); }}>Get a Programming Joke</button>)}
        {!showSetup && !showPunchline
          && (<button className='btn btn-dark knock-knock' onClick={() => { this.knockJoke(); this.showSetupJoke(); }}>Get a Knock-Knock Joke</button>)}

      {showSetup && !showPunchline && (<button className='btn btn-dark punchline' onClick={this.showPunchlineJoke}>Get Punchline</button>)}

      {showSetup && showPunchline && (<button className='btn btn-dark reset' onClick={this.resetJoke}>Get a New Joke</button>)}
        </div>
            </div>
      );
    }
}

export default App;
