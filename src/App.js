import React, {Component} from 'react';
import Games from './components/games'

    class App extends Component {
      state = {
        games: []
      }

      componentDidMount() {
        fetch(
          'https://localhost:5001/BoxScore')
        .then(res => res.json())
        .then((data) => {
          this.setState({ games: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          <Games games={this.state.games} />
        );
      }
    }

export default App;