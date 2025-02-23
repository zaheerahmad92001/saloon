import { Platform, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fontsFamily from '../../../assets/fontsFamily';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:colors.white,
    },
    wrapper:{
        flex:1,
        backgroundColor:colors.white,
        marginHorizontal:wp(4),
    },
    contentContainer:{
      // marginTop:hp(2),
    },
   
button:{
  marginBottom: Platform.OS==='android'? hp(2): hp(1),
}


  });

  export default styles;
