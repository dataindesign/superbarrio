import React, { Component } from 'react';
import './App.css';
import MyMapComponent from './components/Map';

const api_url = process.env.API_URL || '';

class App extends Component {

constructor(props){
  super(props);
  this.state = { buildings :[]}
  this.componentDidMount.bind(this);
  };

componentDidMount(){
	fetch(api_url +'http://localhost:3000/buildings')
	.then(res => {
		console.log(res);
		return res.json();
	}) 
	.then((buildings) =>{
		console.log(buildings);

		this.setState({
			buildings: buildings
					})
		

	})

	.catch(console.error)

	
}



  render() {

  	    return (

      <div className="App">
      		
	{
		this.state.buildings.map(name=>
		<div key={name._id}>

			{name._creator}
			{
			
			<div>
			
				{
					name.buildings.map(title=>
						<div key={title.type}>
							{title.title}({title.x})({title.y})
 							
						</div>
						
						 
						 
					)

				}

			</div>
			
			

				}
			
			</div>
			)
		}
    
   <MyMapComponent isMarkerShown/>
    
      </div>
    );
  
}
}
export default App;

