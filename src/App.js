import React, { Component } from 'react';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import MenuExtraContent from './components/MenuExtraContent';
import List from './components/List';
import Context from './components/Context';
import Map from './components/Map';
// Import data locally because of CORS policy on original resource
import json from './data/devon.json';

class App extends Component {
	
	constructor(props) {
		
		super(props);
		
		// set full dataSet and initital context for right card
		this.state = {
			data: json,
			list: true,
			context: json[0],
		}
		
		this.showList = this.showList.bind(this);
		this.showMap = this.showMap.bind(this);
		this.contextHandler = this.contextHandler.bind(this)
		
	}
	
	showMap() {
		// toggle list boolean off to show map
		this.setState({
			list: false,
		});
	}
	
	showList() {
		// toggle list boolean on to show list
		this.setState({
			list: true,
		});
	}
	
	// reset data in state when filters removed
	resetFilters() {
		/* 
		 * @@ TODO - to will inevitably invoke the dt.filter function
		 * lower down the tree in future.
		 */
		this.setState({
			data: json
		})
	}
	
	/* 
	 * Handler passed to child component to
	 * populate panel with selected row data
	 */
	contextHandler(data) {
		this.setState({
			context: data
		});
	}
	
	render() {
		
		return 	(
			<div className="container">
				<div className="header">
					<Menubar model={items}>
						<MenuExtraContent />
					</Menubar>
				</div>
				<div className="stripMenu">
					<Button label="List" className="p-button-secondary" icon="pi pi-list" onClick={this.showList} />
					<Button label="Map" className="p-button-secondary" icon="pi pi-map-marker" onClick={this.showMap} />
				</div>
				<div className="main">
					{(this.state.list)
						? <List data={this.state.data} handler={this.contextHandler} />
						: <Map />
					}
				</div>
				<div className="context">
					<Context data={this.state.context} />
				</div>
			</div>
		);
	}
}

export default App;

// I'd usually put this elsewhere, but...
const items = [
	{
		label:'Download',
		icon:'pi pi-fw pi-cloud-download',
		items: [
			{
				label:'As CSV',
				icon:'pi pi-fw pi-download'
			},
			{
				label:'As Excel',
				icon:'pi pi-fw pi-download'
			}
		]
	},
	{
		label:'Report',
		icon:'pi pi-fw pi-chart-bar',
		items: [
			{
				label:'New',
				icon:'pi pi-fw pi-plus'
			},
			{
				label:'Saved Reports',
				icon:'pi pi-fw pi-chevron-right',
				items: [
					{
						label:'1 Feb 2019 10:18',
					},
					{
						label:'31 Jan 2019 20:17',
					},
					{
						label:'27 Jan 2019 08:45',
					}
				]
			}
		]
	},
	{
		label:'Advanced Filters',
		icon:'pi pi-fw pi-filter',
		command: (event: Event) => {
			// @@TODO this.filterUIShow();
		}
	}
];