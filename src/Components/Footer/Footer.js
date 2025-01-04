



import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import META from '../images/meta.png'
import TWITTER from '../images/twitter.png'
import PINTEREST from '../images/pinterest.png'
import YOUTUBE from '../images/youtube.png'
import INSTAGRAM from '../images/-instagram.png'
import COLLEGE_UNIVERSITY from '../images/collegeuniversity.png'


const Footer = () => {



  return (
   <View>




<View style={footer.footerContainer}>


<View style={footer.footerCollege}>
    <View><Image source={COLLEGE_UNIVERSITY} style={footer.footerImage} ></Image></View>
</View>



<View style={footer.footerWrapper}>
    <View><Image source={INSTAGRAM} style={footer.footerImages} ></Image></View>
    <View><Image source={TWITTER} style={footer.footerImages} ></Image></View>
    <View><Image source={META} style={footer.footerImages} ></Image></View>
    <View><Image source={PINTEREST} style={footer.footerImages} ></Image></View>
    <View><Image source={YOUTUBE} style={footer.footerImages} ></Image></View>




</View>



</View>






    
   </View>
  )
}





const footer = StyleSheet.create({
  footerContainer: {
      width: '100%',
      overflow: 'hidden',
      height: 680,
      backgroundColor: 'white',
      marginBlock:10
  },

  footerCollege: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBlock: 10
  },

  footerWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -50
  },

  footerImage: {
      width:230,
      height:210,
      resizeMode: 'contain'
  },

  footerImages: {
      width:70,
      height:90,
      resizeMode: 'contain'
  }
})













export default Footer
