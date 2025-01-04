



import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import COPYRIGHT from '../images/Copyright-Logo.png'




const FooterTwo = () => {
  return (
   <View>


<View style={footerTwo.footerTwoContainer}>



<View style={footerTwo.footerTwoWrapper}>

    <Image source={COPYRIGHT} style={footerTwo.footerTwoImage} ></Image>
    <Text style={footerTwo.footerTwoText}>2024 copyright University of Free </Text>


</View>





</View>








    
   </View>


  )
}








const footerTwo = StyleSheet.create({
  footerTwoContainer: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'white',
      height:110
  },
  footerTwoWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  footerTwoImage: {
      width: 30,
      height:110,
      resizeMode: 'contain'
  },
  
  
  footerTwoText: {
       color: 'black',
       fontSize:10,
       fontWeight: 'bold',
       fontFamily: 'Times New Roman'
       
       }



})

  









export default FooterTwo
