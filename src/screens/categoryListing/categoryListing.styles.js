import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white,
    },
    wrapper:{
      flex:1,
      backgroundColor:colors.appBG
    },
    contantContainer:{
      flex:1,
      marginHorizontal:wp(4),
      marginTop:hp(2),
    },
    list:{
      marginTop:hp(2),
    },
  });

  export default styles;