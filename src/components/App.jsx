import React from 'react';
import './App.css';
const mtg = require('mtgsdk');

class App extends React.Component {
  constructor(props) {
    super(props);
    mtg.card.all({ name: 'Squee', pageSize: 1 })
    .on('data', card => {
        console.log(card.name)
    });
  }

  render() {
    return (
      <main className="">

      </main>
    );
  }
}

export default App;
