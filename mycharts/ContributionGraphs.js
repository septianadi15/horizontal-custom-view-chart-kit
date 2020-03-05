import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Dimensions
} from 'react-native';

import { ContributionGraph } from 'react-native-chart-kit';

export default class ContributionGraphs extends Component {
    render(){
        return(
            <View style={styles.sectionContainer}>
                <Text>
                    React Native - Contribution Graph
                </Text>

                <ContributionGraph
                    values={[
                        { date: '2019-01-02', count: 1 },
                        { date: '2019-01-03', count: 2 },
                        { date: '2019-01-04', count: 3 },
                        { date: '2019-01-05', count: 4 },
                        { date: '2019-01-06', count: 5 },
                        { date: '2019-01-30', count: 2 },
                        { date: '2019-01-31', count: 3 },
                        { date: '2019-03-01', count: 2 },
                        { date: '2019-04-02', count: 4 },
                        { date: '2019-03-05', count: 2 },
                        { date: '2019-02-30', count: 4 },
                    ]}
                    endDate={new Date('2019-04-01')}
                    numDays={105}
                    width={Dimensions.get('window').width - 50}
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: 'green',
                        backgroundGradientFromOpacity: 0.5,
                        backgroundGradientTo: 'green',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `white`,
                        labelColor: (opacity = 1) => `white`,
                        style: {
                            marginVertical: 8,
                            borderRadius: 16,
                        },
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