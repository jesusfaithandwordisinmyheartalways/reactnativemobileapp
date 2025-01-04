



import {StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import News from './Components/News/News'




const Stack = createStackNavigator()


 function App() {

  return (


   <SafeAreaView style={{ flex : 1}}>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
     </NavigationContainer>

   </SafeAreaView>

  );

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




export default App
