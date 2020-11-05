import React from 'react'
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status : 'init',
      isLoaded:false,
      weatherData:null
    }
  }

  getWeatherData = () => {
      const weatherApi  = `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;

      fetch(weatherApi,{signal:this.controllerSignal})
      .then(response=>response.json())
      .then((result)=>{
        console.log("weather api result:",result)
      })
  }

  render() {
    return (
      <div className="App">

        <div className="container">
        </div>

      </div>
    );
  }

}

export default App;
