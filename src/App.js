import React from 'react';
import logo from './logo.svg';
import './App.css';

import PaginationDynamic from './components/pagination';
import Pagination from './components/pagination-numbers';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<PaginationDynamic data={[
				{ content: "Element 1"},
				{ content: "Element 2"},
				{ content: "Element 3"},
				{ content: "Element 4"},
				{ content: "Element 5"},
				{ content: "Element 6"},
				{ content: "Element 7"},
				{ content: "Element 8"},
				{ content: "Element 9"},
				{ content: "Element 10"},
				{ content: "Element 11"},
				{ content: "Element 12"},
				{ content: "Element 13"},
				{ content: "Element 14"},
				{ content: "Element 15"},
				{ content: "Element 16"}
				]}>
			</PaginationDynamic>
			<hr></hr>
			<Pagination></Pagination>
		</div>
	);
}

export default App;
