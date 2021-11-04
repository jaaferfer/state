import React  from "react";
import './App.css';
import CyrcleLife from './componenets/CyrcleLife.js'
class App extends React.Component {
  
 


  state={
    Person:{name:"Jaafer Feriani",
    profession:" full stack JS student in GOMYCODE",
    Image: "https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/245932341_1828599737336167_5218689444431226789_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=adWiDh2FDLMAX-rBrwf&_nc_ht=scontent.ftun9-1.fna&oh=70aad6fccfa7937b2cb5508ead58b639&oe=6187E5F9"

  },
  
  show:false,
}
  handleclick=() =>this.setState({show:!this.state.show})
  
  
  render() {
    
    return (
    <div>
    <button className='bt' onClick={this.handleclick} >  {!this.state.show?'Show':'Hide'}</button>
    {this.state.show?
    <div>
    <img className='im' src={this.state.Person.Image} alt={this.state.Person.name} ></img>
    <h1>Full Name: {this.state.Person.name}</h1> 
    <h2>Profession: {this.state.Person.profession}</h2>
    <CyrcleLife/>
    </div>:null}
    </div>
    )}
}
  export default App;