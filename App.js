import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createButtonTabNavigator} from 'react-navigation-tabs';

import InScreen from './screen/in';
import FbScreen from './screen/fb';

export default class App extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

const TabNavigator=createButtonTabNavigator({
  Facebook: {screen: FbScreen},
  Instagram: {screen: InScreen},
});

const AppContainer= createAppContainer(TabNavigator);