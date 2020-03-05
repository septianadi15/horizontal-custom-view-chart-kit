import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Dimensions
} from 'react-native';

import { BarChart } from 'react-native-chart-kit';

export default class BarCharts extends Component {
    render(){
        return(
            <View style={styles.sectionContainer}>
                <Text>
                    React Native Chart Kit - Bar Chart
                </Text>

                <BarChart
                    data={{
                        labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        ],
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
                    width={Dimensions.get('window').width - 50}
                    height={220}
                    yAxisLabel={'Rp. '}
                    chartConfig={{
                        backgroundColor: 'yellow',
                        backgroundGradientFrom: 'yellow',
                        backgroundGradientTo: 'yellow',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `black`,
                        labelColor: (opacity = 1) => `black`,
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