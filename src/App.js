import React, { Component } from 'react';
import { View, Text, YellowBox } from 'react-native';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
	
	constructor () {
		super();

		// https://github.com/facebook/react-native/issues/18868#issuecomment-382671739
		YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
	};

	componentWillMount() {
		var config = {
			apiKey: "AIzaSyBAGEIMO8eRz0Treav8g89SwoMnGrk2FN0",
			authDomain: "react-native-66948.firebaseapp.com",
			databaseURL: "https://react-native-66948.firebaseio.com",
			projectId: "react-native-66948",
			storageBucket: "",
			messagingSenderId: "1061484014811"
		};
		firebase.initializeApp(config);	  
	};

	render() {

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return(
			<Provider store={ store }>
				<Router />
			</Provider>
		);

	};

};

export default App;