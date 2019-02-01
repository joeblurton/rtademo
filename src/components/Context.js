import React, { Component } from 'react';
import {Card} from 'primereact/card';
import {Chart} from 'primereact/chart';
const format = require('format-number');

class MenuExtraContent extends Component {
	
	render() {

		if (this.props.data) {
			
			// Define data for Pie Chart
			const data = {
				labels: [
					"Pedal Cycles", 
					"Motorcycles",
					"Cars & Taxis",
					"Buses & Coaches",
					"Light Goods Vehicles",
					"2-Axle Rigid HGV",
					"3-Axle Rigid HGV",
					"4/5-Axle Rigid HGV",
					"3/4-Axle Artic HGV",
					"5-Axle Artic HGV",
					"6-Axle+ Artic HGV"
				],
				datasets: [
					{
						data: [
							this.props.data.PedalCycles,
							this.props.data.Motorcycles,
							this.props.data.CarsTaxis,
							this.props.data.BusesCoaches,
							this.props.data.LightGoodsVehicles,
							this.props.data.V2AxleRigidHGV,
							this.props.data.V3AxleRigidHGV,
							this.props.data.V4or5AxleRigidHGV,
							this.props.data.V3or4AxleArticHGV,
							this.props.data.V5AxleArticHGV,
							this.props.data.V6orMoreAxleArticHGV
						],
						backgroundColor: [
							"#2D0F41",
							"#3F145B",
							"#511B75",
							"#63218F",
							"#822C94",
							"#A73B8F",
							"#CD4A89",
							"#E8608A",
							"#ED8495",
							"#F3A8A1",
							"#F9CDAC"
						],
					}
				]
			}
			
			// Options object for Bar Chart
			const options = {
				title: {
					display: true,
					text: `Traffic on ${this.props.data.Road} by Vehicle Class`,
					fontSize: 16
				},
				legend: {
					position: 'bottom'
				}
			};
			
			// Preformat variables for readability
			const formatted = {
				LinkLength_km: format({round: 1})(this.props.data.LinkLength_km) + " km",
				LinkLength_miles: format({round: 1})(this.props.data.LinkLength_miles) + " miles",
				AllMotorVehicles: format()(this.props.data.AllMotorVehicles),
				AllHGVs: format()(this.props.data.AllHGVs)
			}
			
			return (
				<Card>
					<Chart type="pie" data={data} options={options} width={"100%"} height={"85"} />
					<p className="number-detail"><strong>{formatted.AllMotorVehicles}</strong> vehicles in total, including <strong>{formatted.AllHGVs}</strong> HGVS.</p>
					<table className="p-card-table">
						<tbody>
							<tr>
								<td className="right">AADF Year</td>	
								<td className="center"><strong>{this.props.data.AADFYear}</strong></td>
								<td className="right">CP</td>
								<td className="center"><strong>{this.props.data.CP}</strong></td>
							</tr>
							<tr>
								<td className="right">Link Length</td>
								<td className="center"><strong>{formatted.LinkLength_km}</strong></td>
								<td className="right">Link Length</td>
								<td className="center"><strong>{formatted.LinkLength_miles}</strong></td>
							</tr>
						</tbody>
					</table>
				</Card>
			);
		} else {
			return <p>No context selected</p>
		}
	}
}

export default MenuExtraContent;