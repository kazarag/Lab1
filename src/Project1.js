import React from "react";
import {StyleSheet,Text,View} from "react-native";
const Project1=()=>{
      return(
      <View style={myStyle.Viewt}>
        <Text style={myStyle.Textt}>Hello world</Text>
      </View>
      )
  }
  
  export default Project1;
  const myStyle = StyleSheet.create(
    {
        Viewt:{
			width: 100,
            height: 100,
            backgroundColor: 'aqua',
            alignItems: 'center',
            justifyContent: 'center'
		},
        Textt:{
            color: 'black'
        }
    }
  )