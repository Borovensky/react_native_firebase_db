import React, { Component } from 'react';
import { View, Text, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Card, Input, Button, Spinner, ErrorMessage } from './common';
import { signIn, checkAuth } from '../actions';

class Signup extends Component {

	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			error: '',
			borderStyleEmail: '#999999',
			borderStylePassword: '#999999'
		};

	};

	componentWillMount() {	
		this.props.checkAuth();
	};

	onEmailChange(text) {
		this.setState({
			email: text,
			error: ''
		});
	};

	onPasswordChange(text) {
		this.setState({
			password: text,
			error: ''
		});
	};

	onButtonPress() {

		const { email, password } = this.state;

		if(email == '') return this.setState({ error: 'email is required' });

		if(password == '') return this.setState({ error: 'password is required' })

		this.props.signIn({ email, password });
		
	};

	onBlurEmail() {
		this.setState({
			borderStyleEmail: '#999999'
		});
	};

	onBlurPassword() {
		this.setState({
			borderStylePassword: '#999999'
		});
	};

	onFocusEmail() {
		this.setState({
			borderStyleEmail: 'green'
		});
	};

	onFocusPassword() {
		this.setState({
			borderStylePassword: 'green'
		});
	};

	render() {
		
		if(this.props.loading) return <Spinner />

		return(
			<Card style={styles.cardContainer}>
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
					<Input
						icon='ios-mail-outline'
						type='email'
						placeholder='E-mail'
						value={this.state.email}
						onChangeText={this.onEmailChange.bind(this)}
						borderStyle={this.state.borderStyleEmail}
						onBlur={() => this.onBlurEmail()}
						onFocus={() => this.onFocusEmail()}
					/>

					<Input
						icon='ios-lock-outline' 
						type='password'
						placeholder='Password'
						secureTextEntry
						value={this.state.password}
						onChangeText={this.onPasswordChange.bind(this)}
						borderStyle={this.state.borderStylePassword}
						onBlur={() => this.onBlurPassword()}
						onFocus={() => this.onFocusPassword()}
					/>
				</KeyboardAvoidingView>
				
				<ErrorMessage error={this.state.error} />

				<Button 
					style={{position: 'absolute', bottom: '10%'}}
					onPress={this.onButtonPress.bind(this)}
				>
					Sign In
				</Button>

			</Card>
		);

	};

};

const styles = {
	cardContainer: {
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
	}
};

const mapStateToProps = ({ auth }) => {
	const { loading } = auth;
	return { loading };
};

export default connect(mapStateToProps, { signIn, checkAuth })(Signup);