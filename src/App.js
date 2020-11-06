import React from 'react';
import './App.css';
import List from './composition/List';

class App extends React.Component {


  render() {
    const { store } = this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              header={list.header}
              key={list.id}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    )
  }

}

export default App;
