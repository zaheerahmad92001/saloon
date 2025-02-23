import React from "react";
import { StyleSheet, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../assets/fontsFamily";
import colors from "../assets/colors";

const XlargeText = (props) => {
    const {text, style ,numberOfLines , } = props
  return <Text style={[styles.xlText,style]}>{text}</Text>;
};

const LargeText = (props) => {
    const {text,style ,numberOfLines} = props
  return <Text style={[styles.lText,style]}>{text}</Text>;
};
const MediumText = (props) => {
    const {text, style, numberOfLines } = props
  return <Text  style={[styles.mediumText,style]}>{text}</Text>;
};
const SmallText = (props) => {
  const {text, style , numberOfLines} = props
return <Text style={[styles.smallText,style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  xlText: {
    fontSize: RFValue(15),
    fontFamily: fontsFamily.regular,
    fontWeight:'600',
    color:colors.appBlack,
  },
  lText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    fontWeight:'600',
    textAlign: 'center',
    color:colors.appBlack,
  },
  mediumText:{
    color:colors.appBlack,
    fontFamily:fontsFamily.regular,
    fontSize:RFValue(13),
    fontWeight:'600',
  },
  smallText:{
    color:colors.appBlack,
    fontFamily:fontsFamily.thin,
    fontSize:RFValue(12),
    fontWeight:'600',
  }
});

export { XlargeText, LargeText ,MediumText,SmallText };
