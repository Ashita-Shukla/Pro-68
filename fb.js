import React from 'react';
import { Text, View } from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'red', fontSize: '15'}}>Facebook</Text>
            </View>
        )
    }
}