import colors from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

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
    },
  });
  export default styles;