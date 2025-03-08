import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from "react-native-responsive-screen";
import fontsFamily from "../../assets/fontsFamily";
const styles = StyleSheet.create({

    wrapper:{
        flex:1,
        backgroundColor:colors.white,
    },
    container:{
        flex:1,
        backgroundColor:colors.appBG,
    },
    contentContainer:{
        flex:1,
        marginHorizontal:wp(4),
        marginTop:hp(1),
        marginBottom:hp(2),
    },
    
      seeAllText: {
        color: colors.lightBlack,
        fontFamily: fontsFamily.medium,
      },
      rowView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:hp(1),
      },
      graphView:{
        backgroundColor:colors.white,
        marginTop:hp(1),
        borderRadius:10,
        paddingBottom:hp(2),
      },
      graphInnerView:{
        paddingHorizontal:wp(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      },
      borderView:{ 
      marginVertical:hp(1),
      borderBottomColor:colors.grayBorder,
      borderBottomWidth:1,
    },
    ratingView:{
        marginTop:hp(1.5),
        backgroundColor:colors.white,
        paddingVertical:hp(1.5),
        borderRadius:10,
    },
    ratingBg:{
        backgroundColor:colors.white,
    },
   
})
export default styles;