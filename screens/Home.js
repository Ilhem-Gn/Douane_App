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

import LinearGradient from 'react-native-linear-gradient';
import Header from '../common/Header';
import MenuItem from '../common/MenuItem';
import Tarif from '../screens/Tarif';
import Map from '../screens/Map';
import News from '../screens/News';
import Statistique from '../screens/Statistique';
import HelpDesk from '../screens/HelpDesk';


import { createStackNavigator, createAppContainer } from "react-navigation";



class Home extends Component {


   

    render() {
        return (
           
            <View >
               
                   <Header itemImage= {require('../res/BackgroundColor.png')}  >H O M E</Header>


                <View style={styles.menuContainer1}>
                 
                    <MenuItem  itemImage= {require('../res/book2.jpg')}  title={'Tarif'} onPress={() => this.props.navigation.navigate('Tarif')}/> 
                    <MenuItem  itemImage= {require('../res/mapv2.jpg')} title={'Map'}  onPress={() => this.props.navigation.navigate('Map')}/>
 
                </View>

                <View style={styles.menuContainer2}>

                     <MenuItem  itemImage= {require('../res/newsv2.jpg')} title={'News'} onPress={() => this.props.navigation.navigate('News')}/>

                </View>

                <View style={styles.menuContainer3}>
                
                     <MenuItem  itemImage= {require('../res/statistiquev2.jpg')} title={'Statistique'} onPress={() => this.props.navigation.navigate('Statistique')} />
                     <MenuItem  itemImage= {require('../res/helpdeskv2.jpg')}  title={'HelpDesk'} onPress={() => this.props.navigation.navigate('HelpDesk')} />

                </View>
              
             
                     
            </View>    
           // < AppStackNavigator/>
        );
    }
}
export default Home;

const AppStackNavigator =createStackNavigator({
    Tarif_page:Tarif,
});

const styles = StyleSheet.create({

    cont:{
        flexDirection: 'column',
      },
    container: {
        flex: 1,
       // alignItems: 'center',
        //justifyContent: 'center'
    },
    menuContainer1: { //image
        height: '30%',
        width: '110%',
        flexDirection: 'row',
        flexWrap: 'wrap',
       justifyContent: 'space-around',
      // position:'[absolute', 'relative']',
      //justifyContent: 'center',
        marginTop: '-2.4%',
        marginRight: '-10%',
        marginLeft: '-6.99%', //9
       // paddingLeft: '3%',
       paddingRight:'10%',
       flexWrap: 'wrap',

        marginBottom: '-10%',

      },
      menuContainer2: { //image
        height: '38%',
        width: '200%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'center',
        marginRight: '-10%',
        marginLeft: '1.7%',
        marginTop: '-2%',
        paddingRight:'7.2%',
        //marginLeft: '3%',
        marginBottom: '-7%',
    
      },
      menuContainer3: { //image
        height: '31%',
        width: '110%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'space-between',
        marginTop: '-8.4%',
        //marginLeft: '3%',
        //marginTop: '-2%',
        
        marginRight: '-10%',
        marginLeft: '-6.99%', //9
       // paddingLeft: '3%',
       paddingRight:'10%',
       flexWrap: 'wrap',
       justifyContent: 'space-around',

       // marginBottom: '-10%',
    
      },

});