import React, { Component } from 'react';
import './touritem.css';

export default class TourItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			img: '',
			name: '',
			info: '',
			showInfo: false
		};
	}

	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		});
	};

	render() {
		const { city, img, name, info } = this.props.info;
		const checkInfo = (info, info2) => {
			if (info) {
				return <p>{info2}</p>;
			} else {
				return null;
			}
		};

		return (
			<div className="tour">
				<img src={require(`${img}`)} alt="img" />
				<article className="deez-nuts">
					<h1>{name}</h1>
					<h4>{city}</h4>
					<button type="button" onClick={this.handleInfo}>
						info
					</button>
					{checkInfo(this.state.showInfo, info)}
				</article>
			</div>
		);
	}
}
