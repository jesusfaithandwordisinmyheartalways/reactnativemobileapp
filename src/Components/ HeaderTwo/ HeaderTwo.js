


import React from 'react'
import { StyleSheet, View , Text, Animated} from 'react-native'
import { useEffect, useRef } from 'react'



const HeaderTwo = () => {

  const headerPosition = useRef(new Animated.Value(0)).current

  useEffect(() => {
      const animatedHeaderSection = () => {
         Animated.sequence([
          Animated.timing(headerPosition, {
              toValue: 110,
              duration: 1400,
              useNativeDriver: true
          }),
          Animated.timing(headerPosition, {
              toValue: 0,
              duration:1400,
              useNativeDriver: true,
          }),
          Animated.timing(headerPosition,{
              toValue: -110,
              duration: 1400,
              useNativeDriver: true
          }),
          Animated.timing(headerPosition, {
              toValue: 0,
              duration: 1400,
              useNativeDriver: true
          })
          
         ]).start(() => {
              setTimeout(animatedHeaderSection, 3000)
         })
          
      }
              animatedHeaderSection()
  }, [headerPosition])




  

  return (



    <View style={headerTwo.containerTwo}>
    <Animated.View
      style={[headerTwo.wrapperTwo, { transform: [{ translateX: headerPosition }] }]}>
      <Text style={headerTwo.textTwo}>Free Campus News</Text>
    </Animated.View>
  </View>
);
  
}





const headerTwo = StyleSheet.create({
  containerTwo: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'navy',
      
  },

  wrapperTwo: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 25
  },
  textTwo: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'whitesmoke',
  }
})





export default  HeaderTwo
