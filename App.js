import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry,
    ScrollView,
    Dimensions,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    ActivityIndicator
} from 'react-native';
import CustomHorizontalView from './CustomHorizontalView';

var deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      dataLoad: false,
      viewHolder: []
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/0.8/?results=10")
      .then(response => response.json())
      .then(responseData => {
        responseData.results.map((item, key) => {
          this.state.viewHolder.push(
            <View key={key} style={[styles.childContainer, { width: deviceWidth}]}>
              <View style={styles.containerImage}>
                <Image source={{uri : item.user.picture.large}}
                  style={{width: 200, height: 200, borderRadius: 200/2}} />
              </View>
              <View style={styles.containerTeks}>
                <Text style={styles.textLayout}>
                  {item.user.name.first} {item.user.name.last}
                </Text>
              </View>
            </View>
          );
        })
          this.setState({
            dataLoad: true,
            viewHolder: this.state.viewHolder
          })
      })
  }

  render(){
    if(this.state.dataLoad){
      return(
        <CustomHorizontalView>
          {this.state.viewHolder}
        </CustomHorizontalView>
      );
    }else{
      return(
        <View>
          <ActivityIndicator size="large" 
            style={styles.activityIndicatorHolder}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  childContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
    padding: 20
  },
  containerTeks: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 2,
    padding: 20
  },
  textLayout: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Calibri',
    fontWeight: "500",
  },
  activityIndicatorHolder: {
    backgroundColor: '#808080',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20
  }
})