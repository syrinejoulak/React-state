import './App.css';
import React from 'react';
import image from "./img.jpg";
import {Button,Col,Row, Form} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Syrine Joulak",
      bio : "Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.", 
      imgSrc : image, 
      profession : "Fullstack Developer",
      show: false,
      intervall: null,
      timer: 0
    };
  this.showProfil = this.showProfil.bind(this)
  }
showProfil() {
  this.setState(state => {
    if (state.show === true) {
       return { show: false, timer: 0 };
     } else {
       return { show: true };
    }
  });
}
componentDidMount() {
  this.setState({
      intervall : setInterval(() => {
          this.setState({ timer : this.state.timer + 1 })
      }, 1000),
  })
}

componentWillUnmount() {
   clearInterval(this.state.intervall);
}

render() {

  if (this.state.show) {
    return (
      <div className="App">
  <Button variant="danger" onClick = {this.showProfil} >Click me!</Button>
  <div className="container"></div>
  <h3 className = "text">Click on the button to hide the user profile!</h3>
  <div className="profile-info">
  <img src = {this.state.imgSrc} alt="image"  style={{width: "10%"}}/>
  <p className="full-name"> {this.state.fullName} </p>
  <p className ="info"> {this.state.bio} </p>
  <p className ="info2"> {this.state.profession} </p>
  </div>
  </div>

    );
  } else {
    return (
<div className="App"> 
<Button variant="success" onClick = {this.showProfil} >Click me!</Button>
<div className="container">
<h3 className = "text">Click on the button to show the user profile!</h3>
<h3 className = "counter"> {this.state.timer} </h3>  
</div>

</div>
    )
  }

}
}

export default App;
