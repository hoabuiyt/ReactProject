import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

export class App extends Component {

	constructor(props){
		super(props);
		this.state={
			query:''
		}
	}

	/* Hàm tìm kiếm nghệ sỹ*/
	search(){
		console.log('this.state',this.state);
		const BASE_URL = 'https://api.spotify.com/v1/search?q=' + encodeURI(this.state.query) + '&type=artist&limit=1';

		console.log('BASE_URL',BASE_URL);

	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Music Master</div>

				<FormGroup>
					<InputGroup>
						{/* Input key*/}
						<FormControl
							type="text"
							placeholder="Nhap tu khoa"
							value={this.state.query}
							onChange={event=>this.setState({query:event.target.value})}
							onKeyPress={event=> {
								if(event.key === 'Enter'){
									this.search();
								}
							}}
						/>
						{/* search button */}
						<InputGroup.Addon onClick={()=>this.search()}>
							<Glyphicon glyph="search"></Glyphicon>
						</InputGroup.Addon>	
					</InputGroup>									
				</FormGroup>

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
