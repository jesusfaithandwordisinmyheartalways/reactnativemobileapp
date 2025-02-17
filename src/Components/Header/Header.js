



import React, { useRef, useEffect } from "react";
import { View, Text, Animated, StyleSheet, SafeAreaView } from "react-native";
import graduation_cap from "../images/Graduation cap.png"; // Update the path to the correct location of your image




const Header = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start rotation animation
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000, // Duration of one complete rotation
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  // Interpolate rotation value to degrees
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });




  return (

    
   <SafeAreaView style={headerStyle.safeContainer}>
     <View style={headerStyle.container}>
    <View style={headerStyle.wrapper}>
      <Animated.Image
        source={graduation_cap}
        style={[
          headerStyle.graduationImage,
          { transform: [{ rotate }] },
        ]}
      />
      <Text style={headerStyle.text}>
        University <Text style={headerStyle.span}>Of</Text> Free Campus
      </Text>
    </View>
  </View>
   </SafeAreaView>



  )
}





const headerStyle = StyleSheet.create({
  safeContainer: {
    width: "100%",
  },
  container: {
    width:'100%',
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    top: '0'
   
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  graduationImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  span: {
    fontWeight: "normal",
    color: "#666",
  },
});









export default Header
