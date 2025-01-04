


import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import CollegeStudy from '../images/College students studying.png';
import CollegeRacist from '../images/College students racial protest.jpg';
import CollegeStudentFinancial from '../images/College students Financial.png';
import CollegeStudentClimateChange from '../images/College students climate change.png';
import CollegeStudents from '../images/College students .jpg';
import CollegeCampus from '../images/College California campus.png';
import { useState } from 'react';



const ImageCarosel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageSlides = [
    { src: CollegeStudy, caption: 'College Students' },
    { src: CollegeRacist, caption: 'College Protest' },
    { src: CollegeStudentFinancial, caption: 'University Finances' },
    { src: CollegeStudentClimateChange, caption: 'Climate Change' },
    { src: CollegeStudents, caption: 'Students' },
    { src: CollegeCampus, caption: 'University Campus' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imageSlides.length) % imageSlides.length);
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };




  return (
  <View>


<View style={styles.container}>
      {/* Display current slide */}
      <View style={styles.slideContainer}>
        <Image source={imageSlides[currentSlide].src} style={styles.image} />
        <Text style={styles.caption}>{imageSlides[currentSlide].caption}</Text>
      </View>

      {/* Navigation buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity onPress={prevSlide} style={styles.button}>
          <Text style={styles.navText}>❮</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextSlide} style={styles.button}>
          <Text style={styles.navText}>❯</Text>
        </TouchableOpacity>
      </View>

      {/* Dots for slide navigation */}
      <View style={styles.dotsContainer}>
        {imageSlides.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => selectSlide(index)}
            style={[
              styles.dot,
              index === currentSlide && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>









    
  </View>





  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContainer: {
    width: 350,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  
  caption: {
    position: 'absolute',
    bottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },


  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
  },
  navText: {
    color: 'white',
    fontSize: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#bbb',
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#717171',
  },



});







export default ImageCarosel
