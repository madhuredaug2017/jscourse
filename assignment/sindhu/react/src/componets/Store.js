import React from 'react';
import {getFunName} from './helpers'

class StorePicker extends React.Component{
// 	constructor(){
// 	super();
// 	this.goToStore = this.goToStore.bind(this);
// }
	goToStore(event){
		event.preventDefault();
		console.log('you changed the URL');
		console.log(this.storeInput.value);
	}
	render(){
		return (
			//JSX
			<form className="Store" onSubmit={(e) => this.goToStore(e)}>
		{/*format for comments in JSX*/}
				<h1>Its a Store</h1>
				<input type="text" placeholder="Enter Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}/>
				<button type="submit">visit store</button>
			</form>
				);
	}
}

export default StorePicker;
