import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import './App.css';
/*import Pagination from './Pagination';*/

export class App extends Component {

	constructor(props){
		super(props);
		this.state={
			query:'',
			datasms: null
		};

		const API_URL = 'http://core-win.qti.vn/api/SmsManagersApi/GetSendSms?mahoso=&firmdonvi=01.28.H47&ghichu=&tungay=&denngay';

		fetch(API_URL,{
			method:'GET'
		})
		.then(res => res.json())
		.then(data => {
			//console.log('data',data);
			const datasms  = data;			
			this.setState({datasms})
		});	
	}

	/* Hàm tìm kiếm */
	search(){
		console.log('this.state',this.state);

		const API_URL = 'http://core-win.qti.vn/api/SmsManagersApi/GetSendSms?mahoso=&firmdonvi='+ this.state.query +'&ghichu=&tungay=&denngay';

		fetch(API_URL,{
			method:'GET'
		})
		.then(res => res.json())
		.then(data => {
			//console.log('data',data);
			const datasms  = data;			
			this.setState({datasms})
		});			

	}

	render() {
		return (
			<div className="App">
				<div className="App-title">Random User</div>

				<FormGroup>
					<InputGroup>						
						<FormControl
							type="text"
							placeholder="Nhập số lượng user cần lấy"
							value={this.state.query}
							onChange={event=>this.setState({query:event.target.value})}
							onKeyPress={event=> {
								if(event.key === 'Enter'){
									this.search();
								}
							}}
						/>
						
						<InputGroup.Addon onClick={()=>this.search()}>
							<Glyphicon glyph='search'></Glyphicon>
						</InputGroup.Addon>	
					</InputGroup>									
				</FormGroup>

				<Profile products={this.state.datasms}/>
			</div>
		);
	}
}

export default App;
