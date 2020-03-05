import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Text,
    Dimensions,
    SafeAreaView
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

import BarCharts from './mycharts/BarCharts';
import BezierLineCharts from './mycharts/BezierLineCharts';
import ContributionGraphs from './mycharts/ContributionGraphs';
import LineCharts from './mycharts/LineCharts';
import PieCharts from './mycharts/PieCharts';
import ProgressCharts from './mycharts/ProgressCharts';
import StackedBarCharts from './mycharts/StackedBarCharts';

export default class ChartKit extends Component {
    render(){
        return(
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView >
                    {/* <Header /> */}
                    <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
                        <BarCharts />
                        <BezierLineCharts />
                        <ContributionGraphs />
                        <LineCharts />
                        <PieCharts />
                        <ProgressCharts />
                        <StackedBarCharts />
                    </ScrollView>
                </SafeAreaView>

            </>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });