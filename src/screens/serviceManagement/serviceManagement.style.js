import { Platform, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
  },
  mainContainer:{
    flex:1,
    backgroundColor:colors.appBG,
    // padding:20,
  },
  wrapper:{
    flex:1,
    marginHorizontal:wp(4),
  },
  heading:{
    paddingVertical:hp(1.5)
  },
  buttonStyle:{
    marginBottom:hp(Platform.OS=='android'? 1 : 0),
  },
  contentContainerStyle:{
    paddingBottom:hp(1.5)
  }

});
export default styles;
