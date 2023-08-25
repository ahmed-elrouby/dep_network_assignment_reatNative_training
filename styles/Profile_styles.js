import { StyleSheet } from "react-native";
const Profile_styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#93B1A6',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    page_text_title:{
      color:"#FFC436",
      fontSize:30,
      backgroundColor:"#337CCF",
      fontWeight:"bold",
      padding:5,
      paddingHorizontal:10,
      height:50,
      borderRadius:25,
      marginTop:50,
      marginBottom:10

    }
    ,
    api_container_response:
    {
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:"#ffaacc",
      borderBottomEndRadius:50,
      borderTopStartRadius:50,
      padding:15,
      borderWidth:5,
      borderColor:'#337CCF',
      marginBottom:10
      
    }
    ,
    api_image:
    {
      width:300,
      height:300,
      borderRadius:150,
      borderWidth:2,
      borderColor:'#337CCF',

    },
    api_name:
    {
      color:"#595993",
      fontWeight:'800',
      fontSize:25
    },
    api_container_wait:
    {
      flex:1,
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:"#ff9966",
      borderBottomEndRadius:50,
      borderTopStartRadius:50,
      padding:15,
      borderWidth:5,
      borderColor:'#CC3300',
      marginBottom:10
    },
    api_text_wait:
    {
      color:"#ffff00",
      fontSize:25
    }
  });
  
export default Profile_styles