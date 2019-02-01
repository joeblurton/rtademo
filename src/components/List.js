import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';

class List extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
            data: props.data,
			road: null,
			selected: null
        };
        this.onRoadChange = this.onRoadChange.bind(this);
		this.actionTemplate = this.actionTemplate.bind(this);
		this.displayContext = this.displayContext.bind(this);
    }

	// change road category selection
    onRoadChange(event) {
		console.log(event);
        this.dt.filter(event.value, 'RoadCategory', 'equals');
        this.setState({road: event.value});
    }
	
	displayContext(data) {
		// @@ TODO
		console.log(data);
		this.props.handler(data);
	}
	
	actionTemplate(rowData) {
        return <div>
            <Button type="button" label="View" icon="pi pi-eye" className="p-button-info" onClick={(e) => this.props.handler(rowData)} ></Button>
        </div>;
    }
	
	render() {
		
		// set header labels
		const roads = [
			{label: 'TODO', value: null},
			{label: 'M or Class A Principal Motorway (PM)', value: 'PM'},
			{label: 'Class A Principal road in Rural area (PR)', value: 'PR'},
			{label: 'Class A Principal road in Urban area (PU)', value: 'PU'},
			{label: 'M or Class A Trunk Motorway (TM)', value: 'TM'},
			{label: 'Class A Trunk road in Rural area (TR)', value: 'TR'},
			{label: 'Class A Trunk road in Urban area (TU)', value: 'TU'},
			{label: 'Class B road in Rural area (BR)', value: 'BR'},
			{label: 'Class B road in Urban area (BU)', value: 'BU'},
			{label: 'Class C road in Rural area (CR)', value: 'CR'},
			{label: 'Class C road in Urban area (CU)', value: 'CU'},
			{label: 'Class U road in Rural area (UR)', value: 'UR'},
			{label: 'Class U road in Urban area (UU)', value: 'UU'}
		];
		
		// header component to pass to DataTable
		var header = <div style={{'textAlign':'left'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Search all Counts" size="50"/>
                    </div>;
		
		// @@TO DO - road filter dropdown
		let roadFilter = <Dropdown style={{width: '100%'}} options={roads} value={this.state.road} onChange={this.onRoadChange}/>
		
		return (
			<DataTable ref={(el) => this.dt = el} value={this.state.data} autoLayout={true} paginator={true} responsive={true} rows={15} header={header} globalFilter={this.state.globalFilter} paginatorPosition={"both"} >
				<Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
				<Column field="AADFYear" header="AADF Year" sortable={true} />
				<Column field="CP" header="CP" sortable={true} />
				<Column field="AllMotorVehicles" header="All Motor Vehicles" sortable={true} />
				<Column field="Region" header="Region" sortable={true} />
				<Column field="LocalAuthority" header="Local Authority" sortable={true} />
				<Column field="Road" header="Road" sortable={true} />
				<Column field="RoadCategory" header="Road Category" filter={true} filterElement={roadFilter} sortable={true} />
				<Column field="StartJunction" header="Start Junction" sortable={true} />
				<Column field="EndJunction" header="End Junction" sortable={true} />
				<Column field="LinkLength_miles" header="Link Length (miles)" sortable={true} />
				<Column field="Estimation_method" header="Estimation Method" sortable={true} />
				<Column body={this.actionTemplate} style={{textAlign:'center', width: '6em'}}/>
			</DataTable>
		);
	}
}

export default List;