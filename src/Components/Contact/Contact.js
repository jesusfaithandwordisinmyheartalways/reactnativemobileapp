



import React from 'react'
import { StyleSheet, View, Text , TextInput, Button, Alert, ScrollView} from 'react-native'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import Header from '../Header/Header';
import HeaderTwo from '../ HeaderTwo/ HeaderTwo';
import Navbar from '../Navbar/Navbar';
import Pagination from '../Pagination/Pagination';
import Footer from '../Footer/Footer';



const Contact = ({ navigation }) => {
        
  const [contactUserName, setContactUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [previousUserName, setPreviousUsername] = useState('')
  const [previousUserEmail, setPreviousUserEmail] = useState('')
  const [contactWebsiteFeedback, setContactWebsiteFeedback] = useState('YES')
  const [contactKidFeedback, setKidFeedback] = useState('YES')
  const [tellAFriend, setTellAFriend] = useState('YES')

  const user_Regex = /^[a-zA-Z0-9_]{3,15}$/; // 3-15 characters, letters, numbers, underscores
  const email_Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format


  const ContactForm = (e) => {
     e.preventDefault()
     if(!user_Regex.test(contactUserName)) {
        Alert.alert('Username must be 3-15 characters and can include letters, numbers, and underscores.')
        return;
     }

     if(!email_Regex.test(userEmail)) {
        Alert.alert('email must be valid')
        return;
     }

     if(previousUserName === contactUserName || previousUserEmail === userEmail) {
        Alert.alert('Username and email cannot be the same as the previous one')
           return;
     }

     Alert.alert(`Thanks you for your submission. Username: ${contactUserName}, Email: ${userEmail}`)

     setPreviousUsername(contactUserName)
     setPreviousUserEmail(userEmail)

     setContactUsername("")
     setUserEmail("")

     setContactWebsiteFeedback('YES')
     setKidFeedback('YES')
     setTellAFriend('YES')


  }

    
  return (
    <View>




<ScrollView contentContainerStyle={contact.scrollViewContent}>



<View style={contact.contactContainer}>

   <Header/>
   <HeaderTwo />
   <Navbar navigation={navigation} />
   </View>




<View style={contact.contactContainer}>

<View style={contact.contactWrapper}>

<View><Text style={contact.contactTitle}>Contact Us</Text></View>

<View>
<View><Text style={contact.label}>Username</Text></View>
<View><TextInput style={contact.contactInput} onChangeText={text => setContactUsername(text)} value={contactUserName} placeholder='Username'></TextInput></View>
</View>

<View>
<View><Text style={contact.label}>Email</Text></View>
<View><TextInput style={contact.contactInput} onChangeText={text => setUserEmail(text)} value={userEmail} placeholder='Email' keyboardType='email-address'></TextInput></View> 
</View>





</View>




</View>








{/*FEEDBACK SECTION */}

<View style={contact.contactContainer}>

<View style={contact.contactWrapper}>
<View><Text style={contact.label}>How You Feel About University Free Website</Text></View>
<View><Picker selectedValue={contactWebsiteFeedback} onValueChange={(data) => setContactWebsiteFeedback(data)} style={contact.contactInput}>
<Picker.Item label="YES" value="YES" />
<Picker.Item label="NO" value="NO" />
</Picker>
</View>

</View>



<View style={contact.contactWrapper}>
<View><Text style={contact.label}> Would you send your kid here?</Text></View>
<View><Picker selectedValue={contactKidFeedback} onValueChange={(data) => setKidFeedback(data)} style={contact.contactInput}>
<Picker.Item label="YES" value="YES" />
<Picker.Item label="NO" value="NO" />
</Picker>
</View>

</View>






<View style={contact.contactWrapper}>
<View><Text style={contact.label}> Would you recommend this university to anyone else</Text></View>
<View><Picker selectedValue={tellAFriend} onValueChange={(data) => setTellAFriend(data)} style={contact.contactInput}>
<Picker.Item label="YES" value="YES" />
<Picker.Item label="NO" value="NO" />
</Picker>
</View>

</View>




<View><Button onPress={ContactForm} title='Submit'></Button></View>




</View>








<View>
   <Pagination navigation={navigation} prevScreen="Home" nextScreen="News" currentScreen="Contact" />
</View>


      <View><Footer /></View>






</ScrollView>










    </View>
  )
}





const contact = StyleSheet.create({
   
  contactContainer: {
     width: '100%',
     overflow: 'hidden',
     display: 'flex', // Ensures flexbox behavior
     alignItems: 'center', // Centers children horizontally
     justifyContent: 'center',
     marginBlock: 30
  },

  contactWrapper: {
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     width: '100%',

  },

  contactInput: {
   height: 50,
   borderColor: 'green',
   borderWidth: 3,
   marginBottom: 15,
   borderRadius: 5,
   backgroundColor: 'white',
   width: 310,
   textAlign: 'center'
  },


  label: {
   fontSize: 16,
   marginBottom: 5,
   textAlign: 'center'
  },


  contactTitle: {
   fontSize: 24,
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 20,
  },

  scrollViewContent: {
   paddingVertical: 20,
},



})












export default Contact
