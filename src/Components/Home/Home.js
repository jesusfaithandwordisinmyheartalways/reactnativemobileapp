



import React from 'react'
import { View, StyleSheet, Text, TextInput, Image, ScrollView } from 'react-native';
import Header from '../Header/Header';
import HeaderTwo from '../ HeaderTwo/ HeaderTwo';
import Navbar from '../Navbar/Navbar';
import Pagination from '../Pagination/Pagination';
import ImageCarosel from '../ImageCarosel/ImageCarosel';
import Footer from '../Footer/Footer';
import FooterTwo from '../FooterTwo/FooterTwo';
import FOX_NEWS from '../images/Fox News.png'
import USA_TODAY from '../images/USA today.jpg'
import NEW_YORK from '../images/New York Times.png';
import CNN from '../images/CNN.png';
import { useState } from 'react';




const Home = ({ navigation}) => {


  const [searchTerm, setSearchTerm] = useState('');

  // Articles data (including summaries and images)
  const articlesData = [
    {
      title: 'Fox News - Who Win The Election',
      image: FOX_NEWS,
      summary:
        "October 21st, 2024 - By Senior Advisor, Micheal Horton. Now that the election is approaching everyone wants to know who's gonna win. The future is uncertain for students on campus and also around the world of how this is going to benefit them in any type of way. People have fear, doubt, uncertain on how this is going to play out.",
    },
    {
      title: 'USA Today - College Fall Season',
      image: USA_TODAY,
      summary:
        "September 21st, 2024 - By Junior Advisor, Jennifer Georgia. Fall Season has arrived on Campus, Students Now in Focus Mode, Educational expenses have been paid for books, dorm rooms, etc. has all been taken into account now let's see what's next for the parents and then also the students.",
    },
    {
      title: 'New York Times - Students Return',
      image: NEW_YORK,
      summary:
        "August 24th, 2024 - By Advisor, Hugh Jacobinson. Now that students are in the process to return here on campus, what's their motivation to keep going? We hear that good things will come.",
    },
    {
      title: 'CNN - Summer Time & Courses',
      image: CNN,
      summary:
        "July 24th, 2024 - By Admission Advisor, Fred Davidson. OK now the summer is here, so what's the plan for students enrolled in school or vacation. We hope that the students' grades are in good standing because most don't really look or take it seriously going into the next semester.",
    },
    {
      title: 'Fox News - Exam Stress and Focus',
      image: FOX_NEWS,
      summary:
        "December 12th, 2024 - By Stacy Intern. Many concerns have risen about how weather can affect students' focus during finals week, creating stress on campus.",
    },
    {
      title: 'USA Today - Changes in Education Policy',
      image: USA_TODAY,
      summary:
        "December 18th, 2024 - By Quest Davidson. Students are in fear of what might happen to the education system under new political changes and how it will impact their future.",
    },
    {
      title: 'New York Times - East Coast College Progress',
      image: NEW_YORK,
      summary:
        "December 24th, 2024 - By Edward Pierce. East Coast colleges are seeing significant progress after elections, raising questions about which environment is best for students to thrive.",
    },
    {
      title: 'CNN - University Growth Amid Global Challenges',
      image: CNN,
      summary:
        "December 31st, 2024 - By Sara Hawkins. The future of university growth and challenges amidst world issues is under deep discussion as schools look to adapt.",
    },
  ];

  // Filter articles based on search term
    const filteredArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <ScrollView contentContainerStyle={home.scrollViewContent}>


    <View style={home.homeContainer}>
      <Header />
      <HeaderTwo />
      <Navbar navigation={navigation} />
    </View>



    <View style={home.homeContainer}>
      <TextInput onChangeText={setSearchTerm}style={home.input} placeholder="Search Campus Articles Fox, USA, New York CNN" placeholderTextColor="green"
       autoCapitalize="words"
      />
    </View>



    <View style={home.homeContainer}>
      {filteredArticles.length > 0 ? (
        filteredArticles.map((article, index) => (
          <View key={index} style={home.homeSectionWrapper}>
              <Image source={article.image} style={home.image} />
               <Text style={home.textHeader}>{article.title}</Text>
               <Text style={home.textPara}>{article.summary}</Text>
             </View>
        ))
        ) : (
             <Text style={home.noResultsText}>No articles match your search.</Text>
          )}
    </View>




    <View>
        <Pagination navigation={navigation} prevScreen="Home" nextScreen="Contact" currentScreen="Home" />
    </View>





            <View>
              <ImageCarosel />
            </View>

    

    <View>
      <Footer />
    </View>

    <View>
      <FooterTwo />
    </View>




  </ScrollView>



  )
}






const home = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20,
  },

  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  homeSectionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    width: 350,
    padding: 10,
    borderRadius: 3,
    marginBottom: 15,
    alignSelf: 'center',
  },
  input: {
    margin: 15,
    height: 50,
    width: 410,
    borderColor: 'orange',
    borderWidth: 3,
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    opacity: 0.8,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textPara: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  noResultsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
  },
});









export default Home
