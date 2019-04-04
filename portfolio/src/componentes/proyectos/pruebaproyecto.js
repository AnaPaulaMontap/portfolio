import React from 'react';
import Panel from './panel'
import Selectors from './selectors'
import  './pruebaproyectos.css';




class Proyectos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[0].img}')`
			},
			panelStyle: {
				background: this.props.data[0].colour,
				color:this.props.data[0].textColor
			},
			buttonHover: false,
			buttonStyle: {
				color: this.props.data[0].textColor
            },
        };
       
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[id].img}')`,
				
                // backgroundImage: this.props.data[id].img
                //backgroundColor: 'black'
			},
			panelStyle: {
				backgroundColor: this.props.data[id].colour,
				color:this.props.data[id].textColor
			},
			buttonStyle: {
				color: this.props.data[id].textColor
			}
			
		});
	}
	_buttonColour(id) {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				activeID: id,
				buttonHover: false,
				// buttonStyle: {
				// 	color: this.props.data[id].textColor
				// }
			});
		}
	}
	render() {
		return (
			<section className="wrapper" style={this.state.wrapperStyle}>
				<Selectors 
					data={this.props.data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
				<Panel 
					data={this.props.data[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/>
			</section>
		);
	}
}


export default Proyectos