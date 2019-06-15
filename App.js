import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

import { createBottomTabNavigator ,createAppContainer} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'react-native-vector-icons/AntDesign';

import Tarif from './screens/Tarif';
import Map from './screens/Map';
import News from './screens/News';
import Statistique from './screens/Statistique';
import HelpDesk from './screens/HelpDesk';
import Home from './screens/Home';




const NavStack = createBottomTabNavigator({
 
    Home: {
      screen: Home,
      navigationOptions:{
        tabBarLabel:'HOME',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bank" color={tintColor} size={24} />
        )
      }
  },
  
    Tarif: {
        screen: Tarif,
        navigationOptions:{
          tabBarLabel:'TARIF',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="book" color={tintColor} size={24} />
          )
        }
    },
    
    Map: {
      screen: Map,
      navigationOptions:{
        tabBarLabel:'MAP',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="map-marker" color={tintColor} size={24} />
        )
      }

    },
    News: {
      screen: News,
      navigationOptions:{
        tabBarLabel:'NEWS',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="newspaper-o" color={tintColor} size={24} />
        )
      }
    },
    Statistique: {
      screen: Statistique,
      navigationOptions:{
        tabBarLabel:'STATISTIQUE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bar-chart-o" color={tintColor} size={24} />
        )
      }
    },
    HelpDesk:  {
      screen: HelpDesk,
      navigationOptions:{
        tabBarLabel:'HELPDESK',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="mail-forward" color={tintColor} size={24} />
        )
      }
    }

});


const App = createAppContainer(NavStack);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
