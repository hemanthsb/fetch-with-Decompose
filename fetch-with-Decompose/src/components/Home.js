import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Home extends Component {
	render() {
		return (
			<div className="App">
				<h2>Home Page</h2>

				<Link to='/PostList'>
				<Button variant="btn btn-primary">Fetch</Button>
				</Link>
				<br/>
				<br/>
				<Link to='/PostForm'>
				<Button variant="btn btn-primary">Post</Button>
				</Link>
				
			</div>
		)
	}
}

export default Home;