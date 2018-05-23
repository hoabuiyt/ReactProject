import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import './App.css';

export class Profile extends Component {

	constructor(props){
		super(props);
		console.log('prop',this.props);
	}

	/*render() {
		return (
			<div>
				<div className="Profile">
					<div>Picture</div>
					<div>Name</div>
				</div>
				<div className="Gallery">
					Galleryfff
				</div>
			</div>
			
		);
	}*/


	
 
    /*return(
    	var rows = this.props.products
        .map(function(product, i) {
            return (
                <ProductRow
                    key={i}
                    product={product}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));

        !rows.length
            ? <div className='alert alert-danger'>No products found.</div>
            :
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
    );*/
}

export default Profile;
