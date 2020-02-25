import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Game from "./TicTakToeComponent/tick-tak-toe";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
	<Router>
		<div className="App">
			<Header/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/tic-tak-toe" component={Game} />
			</Switch>
		</div>
	</Router>
  );
}

export default App;