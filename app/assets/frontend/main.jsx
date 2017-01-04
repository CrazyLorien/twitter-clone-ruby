import React from 'react'
import ReactDOM from 'react-dom'
import  Greet  from "./greet"

let documentReady = () => {
    class Main extends React.Component
    {
	   render () 
	   {
	   	  return  <div><Greet />
	   	                Hello from the component!</div>;
	   }
	}


	ReactDOM.render(<Main />, document.getElementById("react"));
}

$(documentReady);