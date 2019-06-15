import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Footer extends Component {

    render(){
        return(
            <View style={styles.footer}  >
               <Text style={styles.footerText} >
                   {this.props.children }
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    footer: {
        backgroundColor : '#1A237E',
       //backgroundColor : '#fff',
        height : 47,
        position: 'absolute',
         left: 0, 
         right: 0,
          bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
       color: "#fff",
       fontSize: 18,
       fontWeight: '600',
       //borderColor: '#fff',
      //borderWidth: 2,
       
       padding: 20,
       paddingLeft: 40,
       paddingRight: 40,
       backgroundColor: 'rgba(255,255,255, .1)'
      }
    
});