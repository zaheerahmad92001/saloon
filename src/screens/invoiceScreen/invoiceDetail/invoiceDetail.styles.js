import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor:colors.appBG,
  },
  contentContainer:{
    flex:1,
    marginHorizontal:wp(4),
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  printButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
  },
  downloadButton: {
    flex: 1,
    marginLeft: 5,
  },
  buttonTextPrint: {
    color: colors.primary,
  },
});

export default styles;
