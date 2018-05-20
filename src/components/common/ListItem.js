import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box'

class ListItem extends PureComponent {

    constructor() {
        super();
        
        this.state = {
            checked: false
        };
    };

    render () {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
                <CheckBox
                    onClick={() => {this.setState({ checked: !this.state.checked })}} 
                    isChecked={this.state.checked}
                />
            </TouchableOpacity>
        );
    };

};

const styles = {
    itemContainer: {
        height: 40,
        backgroundColor: '#fff',
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
};

export default ListItem;