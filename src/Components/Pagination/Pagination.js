



import React from 'react'
import {View, StyleSheet, Button} from 'react-native'



const Pagination = ({ navigation, prevScreen, nextScreen}) => {

  return (


     <View style={pagination.pContainer}>
                        {prevScreen && (
                            <Button onPress={() => navigation.navigate(prevScreen)} title="Previous" />
                        )}


                        {nextScreen && (
                            <Button onPress={() => navigation.navigate(nextScreen)} title="Next" />
                        )}




                </View>


  )



}







const pagination = StyleSheet.create({

  pContainer: {
      width: '100%',
      overflow: 'hidden',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 20,
      paddingHorizontal: 20
  },


  arrowButton: {
  backgroundColor: '#007BFF',
  borderRadius: 50,
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
},

  arrowText: {
  fontSize: 24,
  color: 'white',
},

button: {
  backgroundColor: "#007BFF",
  borderRadius: 50,
  width: 50,
  height: 50,
  justifyContent: "center",
  alignItems: "center",
},

  disabledButton: {
  backgroundColor: "gray",
}



})







export default Pagination
