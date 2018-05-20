import React, { Component } from 'react';
import './App.css';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-title">Music Master</div>
				<div>
					<input placeholder="nhap tu khoa" />
					<button>Submit</button>
				</div>
				<div className="Profile">
					<div>Picture</div>
					<div>Name</div>
				</div>
				<div className="Gallery">
					Gallery
				</div>
			</div>
		);
	}
}

export default App;
