import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// Tarif from '../screens/Tarif';

/*export default class MenuItem extends Component {
    render() {
        return(
            <View style={styles.menuItem}>
                <Image  
                   source={this.props.itemImage}
                   style={styles.image}
                />
            </View>
        );
    }
}*/

export default class MenuItem extends React.Component {
    render() {
        
       const shadowStyle={
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
    
       }
        
      return (
        <TouchableOpacity style={styles.menuItem} onPress={this.props.onPress}>
         
          
          <Image
            source={this.props.itemImage}
            style={styles.image} />

          <View style={styles.view}>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
           

        </TouchableOpacity>
      );
    }
  }
          // en press react-native



const styles = StyleSheet.create({
    menuItem: {
        width: '33.333333%' ,
        height: '50%' ,
        padding: 20 ,
       // borderColor: '#1A237E',
       // backgroundColor: '#fff',
       shadowColor: 'black',
       shadowOffset: { width:6, height: 4 },
       shadowOpacity: 1,
       shadowRadius: 2,  
       elevation: 5,
       

    },
    /*shadow: {
      shadowColor: '#202020',
      //shadowOffset: {width: 2, height:4},
      shadowRadius: 5,
      shadowOpacity: 1,

    },*/
    image: {
        width: '160%',
        height: '180%' ,
        opacity: 0.8 ,
        borderColor : 'transparent',
        borderWidth: 3,
        borderRadius: 20,
        //borderColor: '#1A237E',
       shadowColor: 'black',
        shadowOffset: {
           width: 2,
           height: 3
        },
         shadowRadius: 5,
         shadowOpacity: 1.0
     /*
         // android (Android +5.0)
         elevation: 3,*/
       },
    btn: {


    },
    
    view: {
        position: 'absolute',
        backgroundColor: 'transparent',
        /*shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,*/
      },
      
      touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset:{  width: 10,  height: 10,  }, //ess
        shadowColor: 'black',
        shadowOpacity: 1.0,
      },
      text: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333333',
        position: 'absolute', // child
        bottom: -65, // position where you want
        left: 36
        
      },
    /*  elevationLow: {
        ...Platform.select({
          ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,    
          },
          android: {
            elevation: 5,
          },
        }),
      },*/

});

