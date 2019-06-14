import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FriendList from './components/FriendList';

class App extends React.Component {

  render() {
    return (
      <Route path="/" component={FriendList} />
    );
  }
}

export default App;
