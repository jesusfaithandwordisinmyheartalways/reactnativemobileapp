

import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView} from "react-native"
import Racist from '../images/racism.png'
import CollegeFinances from '../images/College finances.jpg'
import ClimateChange from '../images/climate-change.png'
import Header from '../Header/Header'
import HeaderTwo from '../ HeaderTwo/ HeaderTwo'
import Navbar from '../Navbar/Navbar'
import Pagination from '../Pagination/Pagination'
import Footer from '../Footer/Footer'
import FooterTwo from '../FooterTwo/FooterTwo'




const News = ({ navigation }) => {


  return (


      <View>


<View>
    <Header />
    <HeaderTwo />
    <Navbar navigation={navigation} />
  </View>



       <ScrollView contentContainerStyle={news.newsScrollViewContent}>



<View style={news.newsContainer}>



<View style={news.newsWrapper}>
  <View><Image source={Racist} style={news.newsImage}></Image></View>
  <View><Text style={news.newsHeader}>NO TO RACISM</Text></View>
  <View><Text style={news.newsText}> Using Anti- Racist protest has helped our campus succeed.
Our study has shown. There has been a lot of attention on in between 
campuses throughout the country and then also the world.We must stop this</Text></View>

</View>



<View style={news.newsWrapper}>
  <View><Image source={CollegeFinances} style={news.newsImage}></Image></View>
  <View><Text style={news.newsHeader}>Finances</Text></View>
  <View><Text style={news.newsText}>College finances are in a troublesome boat because now everyone’s
   on higher alert on if tuition would be more higher than the previous year or what will happen with 
   grants and scholarships 
  for our students also students that are international and so forth. The future right now is unpredictable</Text></View>

</View>






<View style={news.newsWrapper}>
  <View><Image source={ClimateChange} style={news.newsImage}></Image></View>
  <View><Text style={news.newsHeader}> Climate Change</Text></View>
  <View><Text style={news.newsText}>Climate change is a very serious topic to discuss about. Here at the University of Free ,
  our professors has adapt this lesson in the material for our courses throughout the degree programs. Why? its because its 
  the future of the planet where all students must take action to save it. </Text></View>




</View>





</View>




    <View>
      <Pagination navigation={navigation} prevScreen="Contact" currentScreen="News"  nextScreen="Home" />
    </View>







      <View>
        <Footer />
        <FooterTwo />
      </View>






</ScrollView>
















      </View>







  )
}







const news = StyleSheet.create({

  newsScrollViewContent: {
    paddingVertical:60,
},

    newsContainer: {
        width: '100%',
        overflow: 'hidden'
    },

    newsWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      marginBlock: 50
    },

    newsWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      marginBlock: 50
    },

    newsImage: {
      resizeMode: 'cover',
      width: 389,
      height:210
    },

    newsHeader: {
        fontSize:29,
        color: 'red',
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },

    newsText: {
      fontSize:20,
      color: 'black',
      fontFamily: 'Times New Roman',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }


    
})







export default News
