import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { black } from 'ansi-colors';

export default class Header extends Component {

    render(){
        return(
            
            <ImageBackground source={this.props.itemImage} style={styles.header}  imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor:'black' }}>
                <Text style={styles.headerText} >
                   {this.props.children }
                </Text>          
                <View > 
 
 
        <Image source={require('../res/logo.jpg')}
              style={{width: 30, height: 30, borderRadius: 150/2, marginTop: '-25%', marginRight: '10%', marginLeft: '92%', }} />
 
 
      </View>

            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    header: {
        backgroundColor : 'black',
       //backgroundColor : '#fff',
        height : 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
    },
    headerText: {
        //fontFamily: 'rosemary', 
        color: "#fff",
       fontSize: 26,
       fontWeight: '900',
       //fontWeight: 'bold',
       //borderColor: '#fff',
      // borderWidth: 2,
       padding: 20,
       marginTop:60,
       marginLeft:-230,
       paddingLeft: 40,
       paddingRight: 40,
      // backgroundColor: 'rgba(258,59,098,.1)' 
      }
    
});