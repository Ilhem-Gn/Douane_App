import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";

class HelpDesk extends Component {

    render() {
        return (
                <View style={StyleSheet.container}>
                     <Text>HelpDesk</Text>
                </View>    
        );
    }
}
export default HelpDesk;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});