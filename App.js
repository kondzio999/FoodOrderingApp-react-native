import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Router from './src/components/Router'



export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}



