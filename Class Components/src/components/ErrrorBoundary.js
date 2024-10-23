import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error)
    this.setState({hasError:true});
  }
  render() {
    console.log(this.state.hasError)
    if(this.state.hasError){
        console.log('bb');
        return <p>Something went wrong!!!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
