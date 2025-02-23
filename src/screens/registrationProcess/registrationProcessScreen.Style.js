import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.appBG,
    },
    wrapper:{
      flex:1,
      backgroundColor:colors.appBG,
    },
  contentContainer:{
    flex:1,
    marginHorizontal:wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  
    heading: {
      fontSize: RFValue(18),
      fontFamily: fontsFamily.semiBold,
      color: colors.appBlack,
      marginVertical: 10,
    },
    description: {
      fontSize: RFValue(11),
      fontFamily: fontsFamily.regular,
      color: colors.lightBlack,
      marginBottom: wp(5),
      marginHorizontal:40,
      textAlign:'center'
    },
    bookingsButton: {
      width: '100%',
    },
    homeButton:{
      marginTop:heightPercentageToDP(2),
      backgroundColor:colors.lighterPrimary,
      borderColor:colors.lighterPrimary
    },
    homeButtonText:{
      color:colors.primary
    }
  });

  export default styles;