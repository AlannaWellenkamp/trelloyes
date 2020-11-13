import React, { Component } from 'react';
import './App.css';
import List from './composition/List';
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends React.Component {

  state = {
    store: STORE
  }

  handleDelete = (cardId) => {
    const { lists, allCards } = this.state.store;

    const postDeleteLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const postDeleteCards = omit(allCards, cardId);


    this.setState({
      store: {
        lists: postDeleteLists,
        allCards: postDeleteCards
      }
    })
  };

  handleAdd = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const store = this.state.store;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              id={list.id}
              header={list.header}
              key={list.id}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            />
          ))}
        </div>
      </main>
    )
  }

}

export default App;
