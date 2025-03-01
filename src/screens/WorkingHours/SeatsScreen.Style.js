import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";


const styles = StyleSheet.create({

  container: {
    marginTop: 5
  },
  slotContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:10
  },
  
  addMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  addMoreText: {
    color: colors.primary,
    fontSize:RFValue(13),
    fontFamily:fontsFamily.medium,
    marginLeft: 5,
  },
  addMoreView: {
    borderColor: colors.primary,
    backgroundColor: 'transparent',
    borderWidth: 0.8,

    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: widthPercentageToDP(33),
    marginBottom: 10

}


});

export default styles;