import React from 'react'
import '../App.css';
import Year from '../components/year';
import Header from '../components/header';
import {createStore} from 'redux';
import { budgetReducer } from '../redux/reducers/budgetReducer';
import { Provider } from 'react-redux';

const store = createStore(budgetReducer);

store.subscribe(() => console.log(store.getState()));

function Home() {
  return (
    <div>
      <Provider store={store}>
      <div className="App">
        <Header />
        <Year />
      </div>
    </Provider>
    </div>
  )
}

export default Home
