import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Year from './components/year';
import Header from './components/header';
import {createStore} from 'redux';
import { budgetReducer } from './redux/reducers/budgetReducer';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="app">
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</div>
  );
}

export default App;
