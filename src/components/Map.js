import React, {Component} from 'react';
import image from '../assets/map.jpg';

class Map extends Component {
	
	render() {
		
		return (
			<div className="mapPlaceholder">
				<img src={image} alt="Map" />
				<div className="caption">TODO</div>
			</div>
		)
	}
}

export default Map;