import React, { Component } from 'react';
import {Button} from 'primereact/button';

class MenuExtraContent extends Component {
	
	render() {
		return <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
	}
}

export default MenuExtraContent;