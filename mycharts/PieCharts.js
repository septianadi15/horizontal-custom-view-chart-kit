import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Dimensions
} from 'react-native';

import { PieChart } from 'react-native-chart-kit';

export default class PieCharts extends Component {
    render(){
        return(
            <View style={styles.sectionContainer}>
                <Text>
                    React Native - Pie Chart
                </Text>

                <PieChart
                    data={[
                        {
                        name: 'Seoul',
                        population: 21500000,
                        color: 'rgba(131, 167, 234, 1)',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                        },
                        {
                        name: 'Toronto',
                        population: 2800000,
                        color: '#F00',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                        },
                        {
                        name: 'New York',
                        population: 8538000,
                        color: '#ffffff',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                        },
                        {
                        name: 'Moscow',
                        population: 11920000,
                        color: 'rgb(0, 0, 255)',
                        legendFontColor: '#7F7F7F',
                        legendFontSize: 15,
                        },
                    ]}
                    width={Dimensions.get('window').width - 50}
                    height={220}
                    chartConfig={{
                        backgroundColor: 'blue',
                        backgroundGradientFrom: 'blue',
                        backgroundGradientTo: 'blue',
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
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute //for the absolute number remove if you want percentage
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