import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp ,  widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from "../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";

const styles = StyleSheet.create({
 wrapper:{
    flex:1,
    backgroundColor:colors.white
 },
 container:{
    flex:1,
    backgroundColor:colors.appBG
 },
 contantContainer:{
    flex:1,
    marginHorizontal:wp(4)
 },
 headingtext: {
   marginTop: hp(1.5),
   marginBottom: hp(1),
 },
 checkBoxContainer:{
   marginTop:hp(2),
 },
 smallButton:{
   width:wp(40),
   alignSelf:'flex-end',
 },
 button:{
   marginTop:hp(5),
   marginBottom:hp(1)
 },
});

export default styles;