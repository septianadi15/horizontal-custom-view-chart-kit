import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry,
    ScrollView,
    Dimensions,
    StyleSheet,
    Platform
} from 'react-native';

var deviceWidth = Dimensions.get('window').width;

export default class CustomHorizontalView extends Component {
    constructor(){
        super();
        this.state = {
            currentHorizontalPage: 1
        }
    }
    // function untuk horizontal scroll
    handleHorizontalScroll = (event) => {
        this.scrollX = event.nativeEvent.contentOffset.x;
        this.setState({
            currentHorizontalPage: Math.min(
                Math.max(
                    Math.floor(
                        this.scrollX /  deviceWidth + 0.5
                    ) 
                + 1, 0
                ),
                React.Children.count(this.props.children)
            )
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView onScroll={this.handleHorizontalScroll}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    scrollEventThrottle={64}>
                        {this.props.children}
                </ScrollView>

                <View style={styles.pagingContainer}>
                    <Text style={styles.headerText}>
                        {this.state.currentHorizontalPage} / {React.Children.count(this.props.children)}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ffbf',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        position: 'relative'
    },
    pagingContainer: {
        backgroundColor: 'transparent',
        position: "absolute",
        bottom: 20,
        left: 30,
        width: '100%',
        flexDirection: 'row'
    },
    headerText: {
        color: 'white',
        fontSize: 24
    }
})