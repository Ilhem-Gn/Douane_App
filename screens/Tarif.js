import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, TextInput, ImageBackground, TouchableOpacity, Picker, Alert, Button, Image
    
} from "react-native";
import Header from '../common/Header';


class Tarif extends Component {

   
            constructor(){
                super();
                this.state={
                  PickerSelectedVal : ''
                }
              }
        
              getSelectedPickerValue=()=>{
                Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
          }
        
            render(){
                return(
            <View>
                  
                     <Header itemImage= {require('../res/book2.jpg')} >Tarif</Header>
                 
           
               <View style={styles.MainContainer}>



                        <TextInput
                  
                  // Adding hint in Text Input using Place holder.
                             placeholder="Produit"
         
                  // Making the Under line Transparent.
                            underlineColorAndroid='transparent'
                  
                  // Calling the custom TextInputStyleClass.
                             style={styles.TextInputStyleClass}/>
                         <View style = {styles.cont} >
                            <TouchableOpacity style = {styles.cont2} >
                                 <Text style = {styles.button}>
                                        Recherch
                                 </Text>
                            </TouchableOpacity>
                         </View>
               </View>
                         <View style={{flexDirection: 'row',paddingTop: 160,marginBottom:-15
                         }}>
                                <View style={{backgroundColor: 'black', height: 1.5, flex: 1, alignSelf: 'center',marginLeft:20}} />
                                <Text style={{ alignSelf:'center', paddingHorizontal:5, fontSize: 19 }}>OR</Text>
                                <View style={{backgroundColor: 'black', height: 1.5, flex: 1, alignSelf: 'center',marginRight:20}} />
                         </View>
    
               
    
    <View style={{paddingBottom: 20, paddingTop: -30}} >
       <View style={styles.containerPick}>
              <Picker
                   selectedValue={this.state.PickerSelectedVal}
                   onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} style={styles.text2} >
        
                   <Picker.Item label="Section 01 : Animaux vivants et produits du regne animal" value="Section 01" />
        
                   <Picker.Item label="Section 02 : Produits du regne vegetal" value="Section 02" />
        
                   <Picker.Item label="Section 03 : Graisses et huiles animales ou vegetales; produits de leur dissociation; graisses alimentaires elaborees; cires d'origine animale ou vegetale" value="Section 03" />
        
                   <Picker.Item label="Section 04 : Produits des industries alimentaires; boissons, liquides alcooliques et vinaigres; tabacs et succedanes de tabac fabriques" value="Section 04" />
        
                   <Picker.Item label="Section 05 : Poduits mineraux" value="Section 05" />
        
                   <Picker.Item label="Section 06 : Produits des industries chimiques ou des industries connexes" value="Section 06" />
        
                   <Picker.Item label="Section 07 : Matieres plastiques et ouvrages en ces matieres; caoutchouc et ouvrages en caoutchouc" value="Section 07" />
        
                   <Picker.Item label="Section 08 : Peaux, cuirs, pelleteries et ouvrages en ces matieres; articles de bourrellerie ou de sellerie; articles de voyage, sacs a main et contenants similaires; ouvrages en boyau" value="Section 08" />
        
                   <Picker.Item label="Section 09 : Bois, charbon de bois et ouvrages en bois; liege et ouvrages en liege; ouvrages de sparterie ou de vannerie" value="Section 09" />
        
                   <Picker.Item label="Section 10 : Pate de bois ou d'autres matieres fibreuses cellulosiques; papier ou carton a recycler (dechet et rebuts )" value="Section 10" />
        
                   <Picker.Item label="Section 11 : Matieres textiles et ouvrages en ces matieres" value="Section 11" />
        
                   <Picker.Item label="Section 12 : Chaussures, coiffures, parapluies, parasols, cannes, fouets, cravaches et leurs parties; plumes appretees et articles en plumes; fleurs artificielles; ouvrages en cheveux" value="Section 12" />
        
                   <Picker.Item label="Section 13 : Ouvrages en pierres, platre, ciment, amiante, mica ou matieres analogues; produits ceramiques; verre et ouvrages en verre" value="Section 13" />
        
                   <Picker.Item label="Section 14 : Perles fines ou de culture, pierres gemmes ou similaires, metaux precieux, plaques ou doubles de metaux precieux et ouvrages en ces matieres; bijouterie de fantaisie; monnaies" value="Section 14" />
        
                   <Picker.Item label="Section 15 : Metaux communs et ouvrages en ces metaux" value="Section 15" />
        
                   <Picker.Item label="Section 16 : Machines et appareils, materiel electrique et leurs parties; appareils d'enregistrement ou de reproduction du son, appareils d'enregistrement ou de reproduction des images et du son en television, et parties et accessoires de ces appareils" value="Section 16" />
        
                   <Picker.Item label="Section 17 : Materiel de transport" value="Section 17" />
        
                   <Picker.Item label="Section 18 : Instruments et appareils d'optique, de photographie ou de cinematographie, de mesure, de controle ou de precision; instruments et appareils medico-chirurgicaux; horlogerie; instruments de musique; parties et accessoires de ces instruments ou appareils" value="Section 18" />
        
                   <Picker.Item label="Section 19 : Armes, munitions et leurs parties et accessoires" value="Section 19" />
        
                   <Picker.Item label="Section 20 : Marchandises et produits divers" value="Section 20" />
        
                   <Picker.Item label="Section 21 : Objets d'art, de collection ou d'antiquite" value="Section 21" />
        
        
           </Picker>
        
              </View>
              <View style = {styles.cont} >
                            <TouchableOpacity>
                                
                                 <Text style = {styles.button}>
                                     Suivant
                                 </Text>
                            </TouchableOpacity>
                 </View>
        </View>
     </View>
     
         
        );
    }
}
export default Tarif;

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
      },

      containerPick: {
       // flex: 1,
       // justifyContent: "center",
       
       // margin :10,
        borderRadius: 25, borderWidth: 2, borderColor: '#E5D3CD', overflow: 'hidden',	
        fontSize: 20,
         marginTop: 50,
        // Set border width.
         borderWidth: 2.5,
         height: 55 , width: 352,
         marginLeft: 29,

         
      },
    
    cont:{
        alignItems: 'center',
        paddingTop: 28,
        paddingBottom:0,
        
       
    },

    cont2:{
        shadowColor: 'rgba(46, 29, 157, 0.7)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},
    
    },



    tail: {
        backgroundColor : 'pink',
        height : 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
       /// fontSize: 15,
        //fontWeight: '100',
        //fontSize: 20,
        // backgroundColor : "#E4E4DC",
         //textDecorationLine: 'underline',
         borderRadius: 25 ,
         color: 'black',
         //height: 50, width: 100
         
        
	

    },
    
    button:{
        color:'#fff',
        borderWidth: 2,
        padding: 20,
        borderColor: 'transparent', 
        backgroundColor: '#D29179',
        borderRadius: 60,
        fontSize: 19,
        fontWeight: 'bold',
        height: 60,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        
    },

    MainContainer :{
 
        // Setting up View inside content in Vertically center.
        //justifyContent: 'center',
        //to make it in the center of page
        flex:1,
        //between text and border
        margin: 15,
        paddingTop:'20%',
        paddingBottom:3
         
        },
         
        TextInputStyleClass:{
         
        // Setting up Hint Align center.
        textAlign: 'center',
         
        // Setting up TextInput height as 50 pixel.
        height: 55,
        width:310,
        marginLeft: 33,
        fontSize: 20,
         
        // Set border width.
         borderWidth: 3,
         
         // Set border Hex Color Code Here.
         borderColor: '#E5D3CD',
         
        // Set border Radius.
         borderRadius: 25 ,
         
        //Set background color of Text Input.
        // backgroundColor : "#E4E4DC",

         shadowOpacity: 0.75,
         shadowRadius: 5,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
         
        },
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
});