import React from 'react';
import axios from 'axios';

class SelectedForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      city:'',
      lat:'47.6038321',
      lon:'-122.330062'
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    const res = await axios.get(API);

    console.log(res.data[0])
    this.setState({ lat: res.data[0].lat, lon: res.data[0].lon, });
    this.setState({imageUrl: API });
    console.log(this.state.location);
  }

  render() {
    return (

      // let coordinances = this.state.location.map((data,idx) => {
      // return <li key={idx}>{data.lat}<
      // })
        <>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
          <button onClick={this.getLocation}>Explore!</button>
          
            <h2>The city is: {this.state.searchQuery}</h2>
            <p>Lat & long: {this.state.lat}{this.state.lon} </p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`} alt="map location"/>
            ?

          
        </>
    )
  }
}



//   constructor(props) {
//     super(props);
//     this.state = {
//       displayForm: ,
//       horn1: '',
//       howToSort: ''
//     }
//   }


//   render() {

//     return (
//       <>
//         <form>
//           <h1>Explore A city</h1>
//           <div class="City">
//             <label for="cityname">Cityname:</label>
//             <input type="text" id="cityname" name="cityname" placeholder="enter a city" />
//           </div>
//           <button type="submit">Explore!</button>
//         </form>
//       </>
//     );
//   }
// }

export default SelectedForm