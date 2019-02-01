import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddressInput extends Component {
	static propTypes = { // Hint: Do not change the proptypes!
		address: PropTypes.object.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	state = {results: [], search: ''};

	render() {
		const {results, search} = this.state;
		return (
			<div>
				<input
					type="search"
					placeholder="Street Address"
					value={search}
					onChange={this.changeSearch}
				/>
				<hr/>
				{results.length ? (
					<ul children={results.map(this.renderResult)}/>
				) : (
					<div>No results.</div>
				)}
			</div>
		);
	}

	changeSearch = (e) => {
		this.setState({'search': e.target.value});
		console.log('Search Term:', e.target.value);
		// Remember to throttle the method call. This app has to scale well.
	};

	renderResult = (item) => {
		return (<li key={item.placeId}>{item.street}</li>);
	};
}