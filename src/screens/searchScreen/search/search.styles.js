import { StyleSheet } from "react-native";
import fontsFamily from "../../../assets/fontsFamily";
import colors from "../../../assets/colors";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    wrapper:{
      paddingHorizontal:wp(4), 
      flex:1, 
      backgroundColor:colors.white,
      marginTop:10,
    },

    
    input: {
      flex: 1,
      fontSize: RFValue(12),
      fontFamily: fontsFamily.regular,
      color: colors.appBlack,
    },
    
    
    recentSearchList: {
      paddingTop: 8,
    },
    searchItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical:RFValue(8),
    },
    
    removeText: {
      fontSize: 20,
      color: '#999',
    },
    horizontalLine: {
      height: 1, // Thickness of the line
      backgroundColor:colors.gray, // Line color
      marginVertical: 4, // Space above and below the line
    },
    searchText: {
      fontSize:RFValue(13),
      fontFamily: fontsFamily.extraLight,
      fontWeight:'500',
      color:colors.lightBlack,

    },

    list: {
      backgroundColor: 'white',
      paddingBottom: 16,
    },
    removeIcon: {
      width: wp(5),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default styles;