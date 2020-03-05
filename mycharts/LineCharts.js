import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Dimensions
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';

export default class LineCharts extends Component {
    render(){
        return(
            <View style={styles.sectionContainer}>
                <Text>
                    React Native - Line Chart
                </Text>

                <LineChart
                    data={{
                        labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        ],
                        datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                            strokeWidth: 2,
                        },
                        ],
                    }}
                    width={Dimensions.get('window').width - 50}
                    height={220}
                    chartConfig={{
                        backgroundColor: 'pink',
                        backgroundGradientFrom: 'pink',
                        backgroundGradientTo: 'pink',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `white`,
                        labelColor: (opacity = 1) => `white`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
});