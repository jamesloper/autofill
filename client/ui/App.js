import React, { Component } from 'react';
import AddressInput from './AddressInput';

// Hint: Create the actual AddressInput component, don't modify this file

export default class App extends Component {
	state = {address: {}};

	render() {
		const {address} = this.state;
		return (
			<div>
				<h1>Autofill Demo</h1>
				<AddressInput
					address={address}
					onChange={address => this.setState({'address': address})}
				/>
				<hr/>
				<h4>Selected Address:</h4>
				<pre>{JSON.stringify(address, 2)}</pre>
			</div>
		);
	}
}