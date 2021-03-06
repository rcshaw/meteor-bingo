import React, { Component, PropTypes } from 'react';
import {browserHistory, Link} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';

export default class LoginPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		let username = document.getElementById('login-username').value;
		let password = document.getElementById('login-password').value;
		Meteor.loginWithPassword(username, password, (err) => {
			if(err)
				this.setState({error:err.reason});
			else {
				browserHistory.push('/');
			}
		});
	}

	render () {
		const error = this.state.error;
		return (
			<div className="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="text-center">Login</h1>
						</div>
						<div className="modal-body">
							{error.length > 0 ? 
								<div className="alert alert-danger">{error}</div>:''
							}
						<form
							id="login-form"
							className="form col-md-12 center-block"
							onSubmit={this.handleSubmit}>
							<div className="form-group">
								<input
									type="text"
									id="login-username"
									className="form-control input-lg"
									placeholder="user name" />
							</div>
							<div className="form-group">
								<input
									type="password"
									id="login-password"
									className="form-control input-lg"
									placeholder="password" />
							</div>
							<div className="form-group text-center">
								<input
									type="submit"
									id="login-button"
									className="btn btn-primary btn-lg btn-block"
									value="Login" />
							</div>
							<div className="form-group text-center">
								<p className="text-center">Don't have an account? Register <Link to="/signup">here</Link></p>
							</div>
						</form>
					</div>
					<div className="modal-footer" style={{borderTop:0}}></div>
				</div>
			</div>
		</div>
		);
	}
}

