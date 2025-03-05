
import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white
  },
  mainContainer:{
    flex:1,
    backgroundColor:colors.appBG,
    padding:20
  },
  serviceCountText:{
    fontFamily:fontsFamily.medium,
    fontSize:RFValue(10),
    marginVertical:8
  },
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 30
}

});
export default styles;