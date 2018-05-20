import React, {Component} from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signOut } from './actions';
import Signup from './components/Signup';
import Home from './components/Home';
import NewsItem from './components/NewsItem';

class RouterComponent extends Component {

    render() {

        return(
        
            <Router>
                <Scene hideNavBar>
                    <Stack key='auth'>
                        <Scene key='Signup' component={Signup} title='Sign up' navTransparent/>
                    </Stack>
                    <Stack key='main'>
                        <Scene 
                            key='home'
                            title='Home'
                            component={Home} 
                            rightTitle='Sign out'
                            rightButtonTextStyle={{ color: '#000' }}
                            onRight={() => this.props.signOut()}
                            initial/>
                        <Scene 
                            key='news' 
                            title='NewsItem'
                            component={NewsItem}/>
                    </Stack>
                </Scene>
            </Router>
    
        );
    }
    
}

export default connect(null, { signOut })(RouterComponent);