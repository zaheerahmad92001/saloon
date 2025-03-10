
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    maincontainer: {
      flex: 1,
      backgroundColor: colors.appBG,
    },
    wrapper:{
      flex:1,
      marginHorizontal:wp(4),
    },
  
    sectionTitle: {
      marginTop:hp(2),
      marginBottom: 5,
    },
    description: {
      color: colors.lightBlack,
      marginBottom: 20,
    },
    inputContainer: {
      marginTop:20,
      backgroundColor: colors.white,
      borderRadius: 7,
      paddingVertical: 20,
      paddingHorizontal: 15,
       borderWidth: 1,
      borderColor:colors.grayBorder,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
      
    },
    label: {
      fontSize: RFValue(12),
     fontFamily:fontsFamily.medium,
      marginBottom: 5,
    },
    percntage:{
      color:colors.primary,
    },
    required: {
      color: colors.error,
    },
    Box: {
      backgroundColor:colors.lighterPrimary,
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal:10,
      alignItems: 'flex-end',
    },
  });

export default styles;