import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, Picker, Alert, Button
    
} from "react-native";

import Header from '../common/Header';


class Statistique extends Component {

    constructor(){
        super();
        this.state={
          PickerSelectedVal_S : ''
        }
      }

      getSelectedPickerValue=()=>{
        Alert.alert("Selected Year is: " + this.state.PickerSelectedVal_S);
  }

    render() {
        return (
                <View >
                    
                  <Header itemImage= {require('../res/statistiquev2.jpg')} >Statistique</Header>
                   

                  <View style={{paddingBottom: 20, paddingTop: -30}} >
              <View style={styles.containerPick}>
                <Picker
                   selectedValue={this.state.PickerSelectedVal_S}
                   onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal_S: itemValue})}  >
        
        
                   <Picker.Item label="Statistiques des recouvrements effectués par l’administration des douanes: (Période : Année  2016)" value="S1" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie (Période : Année 2015)" value="S2" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie (Période :Neuf Premiers mois 2016)" value="S3" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie (Période : Année 2016 )" value="S4" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie (Période: Mois   de Janvier  2017)" value="S5" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie (Période: Deux premiers mois 2017)" value="S6" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie ( Période: 05 premiers mois 2017)" value="S7" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie (Période: Les dix premiers mois 2017)" value="S8" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période: Année 2017)" value="S9" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie( Période:Janvier 2018)" value="S10" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période: 1er  TRIMESTRE  2018)" value="S11" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période: Sept  premiers  mois 2018 )" value="S12" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période: Huit  premiers  mois 2018 )" value="S13" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période: Neuf  premiers  mois 2018 )" value="S14" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période: Année 2018 )" value="S15" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie(Période:Deux premiers mois 2019)" value="S16" />
        
                   <Picker.Item label="Statistiques du commerce extérieur de l'Algérie:(Période:Premier Trimestre 2019)" value="S17" />

                   <Picker.Item label="Evolution des statistiques du commerce extérieur de l'Algérie durant la période 2005-2015 (09 premiers mois de l'année 2015)" value="S18" />

        
        
           </Picker>
        
              </View>
              <View style = {styles.cont} >
                            <TouchableOpacity>
                                
                                 <Text style = {styles.button}>
                                    OK
                                 </Text>
                            </TouchableOpacity>
                 </View>
                 </View>
  

                </View>    
        );
    }
}
export default Statistique;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cont:{
        alignItems: 'center',
        paddingTop: 28,
        paddingBottom:0,
        
       
    },

    button:{
        color:'#fff',
        borderWidth: 2,
        padding: 20,
        borderColor: 'transparent', 
        backgroundColor: '#004dcf',
        borderRadius: 60,
        fontSize: 19,
        fontWeight: 'bold',
        height: 60,
        width: 160,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        
    },

    containerPick: {
        // flex: 1,
        // justifyContent: "center",
        
        // margin :10,
         borderRadius: 25, borderWidth: 2, borderColor: '#A3C3FA', overflow: 'hidden',	
         fontSize: 20,
          marginTop: 50,
         // Set border width.
          borderWidth: 2.5,
          height: 55 , width: 352,
          marginLeft: 29,
 
          
       },


});