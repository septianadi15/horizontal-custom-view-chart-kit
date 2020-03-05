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

export default class BezierLineCharts extends Component {
    render(){
        return(
            <View style={styles.sectionContainer}>
                <Text>
                    React Native - Bezier Line Chart
                </Text>

                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April'],
                        datasets: [
                        {
                            data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            ],
                        },
                        ],
                    }}
                    width={Dimensions.get('window').width - 50} // from react-native
                    height={220}
                    yAxisLabel={'Rp. '}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 255) => `white`,
                        labelColor: (opacity = 255) => `white`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    bezier
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