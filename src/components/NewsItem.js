import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from './common';

class NewsItem extends Component {

    render() {

        const { title, description } = this.props.item;

        return(
            <Card style={styles.cardStyle}>
                <Text style={styles.titleStyle}>{title}</Text>
                <Text style={styles.descriptionStyle}>{description}</Text>
            </Card>
        );
        
    };
    
};

const styles = {
    cardStyle: {
        paddingTop: 30,
        paddingHorizontal: 10
    },
    titleStyle: {
        fontSize: 20
    },
    descriptionStyle: {
        marginTop: 20,
        marginBottom: 15,
        fontSize: 16
    }
};

export default NewsItem;