import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView,} from 'react-native';
import { useEffect, useState } from 'react';
import axiosClient from './api/axiosClient';
import Profile_styles from './styles/Profile_styles';
export default function App() {
  const [userData,setUseData]= useState(null);
  const getUserData= async()=>{
    try
    {
      const User1Data= await axiosClient.get('/users/1');
      setUseData({name:User1Data.name,location:User1Data.location,avatar_url:User1Data.avatar_url})
    }
    catch(e)
    {
      console.log("Error: ",e);
    }
  }
  useEffect(()=>{
    getUserData();
  })
  
  return (
    <View style={Profile_styles.container}>
      <Text style={Profile_styles.page_text_title}>API User Data App</Text>
      {userData?<View style={Profile_styles.api_container_response}>
        <Image source={{uri: userData.avatar_url}} style={Profile_styles.api_image} />
        <Text style={Profile_styles.api_name}>{userData.name}</Text>
        <Text style={Profile_styles.api_name}>{userData.location}</Text>
        </View>
        :
        <View style={Profile_styles.api_container_wait}>
          <Text style={Profile_styles.api_text_wait}>Please Wait Data is Loading</Text>
        </View>
      }
    </View>
  );
}
