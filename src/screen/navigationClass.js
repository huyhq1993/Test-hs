import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';
import Person from "../screen/Person.js";
import Home from "../screen/Home.js";

// import PostCategory from "./postCategoryScreen.js";
import { TabNavigator, DrawerNavigator } from "react-navigation";
// import Touchable from '../../src/screens/touchScreen.js';
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export const RootNavigator = StackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },

  },
  Person: {
    screen: Person,
    navigationOptions: {

    },
  },
});
