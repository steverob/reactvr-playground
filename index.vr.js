import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Scene,
  Pano,
  Text,
  View,
  Box,
  Video,
  VrHeadModel,
} from 'react-vr';
import Viewers from "./viewers";
import reactMixin from "react-mixin";
import TimerMixin from 'react-timer-mixin';
import ReactFireMixin from "reactfire";
import * as firebase from "firebase";

export default class WelcomeToVR extends React.Component {

  constructor(){
    super();
    this.state = {
      roomId: '12345'
    };

    const config = {
      apiKey: "AIzaSyDf8bool6tPp7UsUu3YeUA10ckADmfPLvw",
      authDomain: "kastio-vr.firebaseapp.com",
      databaseURL: "https://kastio-vr.firebaseio.com",
      projectId: "kastio-vr",
      storageBucket: "kastio-vr.appspot.com",
      messagingSenderId: "227274392285"
    };
    firebase.initializeApp(config);
  }

  viewersDatabaseRef(){
    return firebase.database().ref(`rooms/${this.state.roomId}/viewers`);
  }

  componentWillMount() {
    this.viewersDatabaseRef().push().set({
      id: Math.random().toString(36).substr(2, 5)
    });

    this.bindAsArray(this.viewersDatabaseRef(), "viewers");
  }

  render() {
    return (
      <View>
        <Scene />
        <Pano source={asset('chess-world.jpg')}/>
        
        <Viewers viewers={this.state.viewers} />
      </View>
    );
  }
};

reactMixin(WelcomeToVR.prototype, TimerMixin);
reactMixin(WelcomeToVR.prototype, ReactFireMixin);

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
