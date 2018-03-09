

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {RootNavigator} from "./src/screen/navigationClass.js";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RootNavigator/>
    );
  }
}
