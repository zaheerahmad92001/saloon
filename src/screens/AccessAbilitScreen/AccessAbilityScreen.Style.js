import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import Header from '../../components/appHeader';
import ToggleSwitch from '../../components/toggleSwitch/toggleSwitch';
import {toggleItems} from '../../staticData';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { MediumText } from '../../components/Typography';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    wrapper:{
      flex:1,
      marginHorizontal:wp(4)
    },
    heading: {
      color: colors.lightBlack,
      marginTop:hp(2),
      marginBottom:hp(2),
      fontFamily:fontsFamily.regular,
      fontSize:RFValue(13),
      fontWeight:'500'
    },
  });
  export default styles;