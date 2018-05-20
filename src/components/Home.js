import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { signOut, getItems } from '../actions';
import { connect } from 'react-redux';
import { Card, Spinner } from './common';
import ListItem from './common/ListItem';

class Home extends Component {

    constructor() {
        super();
        
    };

    componentDidMount() {       
        this.props.getItems();
    }

    selectItem(item) {
        Actions.news({item});
    } 

    renderItem = ({item}) => (
        <ListItem
            onPress={() => this.selectItem(item)}
            title={item.title}
        />
    );

    renderEpmtyList = () => (
        <View>
            <Text>No data</Text>
        </View>
    )

	render() {

        if(this.props.loading) return <Spinner />

		return(
			<Card style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
                <FlatList 
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEpmtyList}
                />
            </Card>
		);

	};

};

const mapStateToProps = ({ home }) => {
    const { loading, data } = home;
    return { loading, data };
}

export default connect(mapStateToProps, { signOut, getItems })(Home);