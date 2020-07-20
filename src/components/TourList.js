import React, { Component } from 'react';
import { tourData } from './tourData';
import TourItem from './TourItem';

export default class TourList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tours: tourData
		};
	}

	render() {
		console.log(this.state.tours);
		return <div>{this.state.tours.map((item) => <TourItem key={item.id} info={item} />)}</div>;
	}
}
