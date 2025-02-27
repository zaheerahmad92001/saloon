
import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";

const styles = StyleSheet.create({

    
    container: {
      flex: 1,
      backgroundColor: colors.white,
     
    },
    maincontainer: {
      flex: 1,
      backgroundColor: colors.appBG,
      padding:20
     
    },
  
    sectionTitle: {
      marginTop:30,
      fontSize: RFValue(16),
      fontFamily:fontsFamily.bold,
      marginBottom: 5,
    },
    description: {
      fontSize: RFValue(12),
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
      color:colors.primary
    },
    required: {
      color: 'red',
    },
    Box: {
      backgroundColor: '#f9e6e6',
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal:10,
      alignItems: 'flex-end',
    },
    input: {
      fontSize: 16,
      color: '#d63333',
      fontWeight: 'bold',
    },
  });

export default styles;