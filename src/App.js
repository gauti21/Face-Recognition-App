import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';


const particlesOptions = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}


class App extends React.Component {
  constructor(){
    super();
    this.state={
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
  return (
    <div>
    <div className="App">
      <Particles className='particles'
       params={particlesOptions}
       />
      <Navigation />
      <Logo />
      <Rank/>
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit}
      />

    </div>
    
    </div>
  );
}
}

export default App;
