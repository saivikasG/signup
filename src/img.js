import React, { Component } from 'react';
import img1 from './images/img1.jpg';
import './index.css';

class App extends Component {
render() {
	const myStyle={
		backgroundImage:
`url(${img1})`,
		height:'100vh',
        fontSize:'20px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
	};
	return (
	<div style={myStyle}>
        <center>
            <br/><br/>
            <h1>Online E-Passport Portal</h1><br/>
            <form class='center'>
         <h3>First Name:<input type='text' placeholder='First Name'/>
         Last Name:<input type='text' placeholder='Last Name'></input><br/></h3>
          <h3>Email:<input type='email' placeholder='Your email'></input><br/></h3>
          <h3>Password:<input type='password' placeholder='Password'></input><br/></h3>
          <button type='button' class='button button1'>Submit</button>
        </form>
        </center>
        
	</div>
	);
}
}

export default App;
