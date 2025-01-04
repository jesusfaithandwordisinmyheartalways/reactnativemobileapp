


import React from 'react'
import { StyleSheet, View, Text , TouchableOpacity, Image, ScrollView} from 'react-native'
import Envelope from  '../images/Envelope icon.png'
import HomeIcon from  '../images/homeicon.png'
import  Menu from '../images/Menu icon.png'
import LATEST_NEWS from '../images/newspaper.jpg'





const Navbar = ({ navigation }) => {



  return (
    <View style={navbar.navbarContainer}>

    <View style={navbar.navbarWrapper}>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={navbar.icon}>
            <Image source={HomeIcon} style={navbar.image}></Image>
              <Text style={navbar.navbarText}>Home</Text>
            </TouchableOpacity>
        </View>


        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={navbar.icon}>
             <Image source={Envelope} style={navbar.image}></Image>
               <Text style={navbar.navbarText}>Contact</Text>
            </TouchableOpacity>
        </View>


        <View>
            <TouchableOpacity onPress={() => navigation.navigate('News')} style={navbar.icon}>
             <Image source={LATEST_NEWS} style={navbar.image}></Image>
               <Text style={navbar.navbarText}>News</Text>
            </TouchableOpacity>
        </View>


    

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={navbar.icon}>
              <Image source={Menu} style={navbar.image}></Image>
              <Text style={navbar.navbarText}>Menu</Text>
              </TouchableOpacity>
        </View>



    </View>


</View>




  )
}





const navbar = StyleSheet.create({
  navbarContainer: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor:'gold',
      height:110,
      marginTop: -20
  },
  navbarWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-around',
      padding: 20
  },
  icon: {
      padding: 13,
  },
  image: {
      height:25,
      width: 25,
      resizeMode: 'contain',
    
  },
  navbarText: {
      marginLeft: -3,
  },

  fixed: {
      position: 'fixed', // Fixed to the top when scrolling down
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
  },

  scrollContent: {
  marginTop: 110, // Prevent content from being hidden behind the navbar
},



})








export default Navbar
