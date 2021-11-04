import React, { Component } from "react";

class CyrcleLife extends Component {
    constructor(props) {
      super(props);
      this.state = { interval: null, timer: 0 };
    }
  
    componentDidMount(){
        this.setState({
            interval : setInterval(() => {
               this.setState ({ timer : this.state.timer +1}); 
            }, 1000)
        }
  
        )
    }
  
  componentDidUpdate(){
  
  }
  componentWillUnmount(){
      clearInterval(this.state.interval)
  }
    
  
  
    render() {
      return (
        <div>
          <h4> {this.state.timer} </h4>
        </div>
      );
    }
  }
  export default CyrcleLife;