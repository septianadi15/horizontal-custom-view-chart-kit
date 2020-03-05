import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Dimensions
} from 'react-native';

import { ProgressChart } from 'react-native-chart-kit';

export default class ProgressCharts extends Component {
    render(){
        return(
            <View style={styles.sectionContainer}>
                <Text>
                    React Native - Progress Chart
                </Text>

                <ProgressChart
                    data={
                        {
                          labels: ["Andi", "Budi", "Caca"],
                          data: [0.3, 0.6, 0.9]
                        }
                      }
                    width={Dimensions.get("window").width - 50} // from react-native
                    height={220}
                    chartConfig={
                    {
                        backgroundGradientFrom: 'purple',
                        backgroundGradientFromOpacity: 1,
                        backgroundGradientTo: 'purple',
                        backgroundGradientToOpacity: 0.5,
                        color: (opacity = 1) => `white`,
                        labelColor: (opacity = 1) => `white`,
                        strokeWidth: 2, // optional, default 3
                    }
                    }
                    backgroundColor="green"
                    paddingLeft="15"
                    absolute
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
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