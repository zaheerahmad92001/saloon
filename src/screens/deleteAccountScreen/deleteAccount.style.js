import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  heading: {
    paddingTop: hp(3),
    textAlign:'left',
  },
  description: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
    color: colors.lightBlack,
    marginTop: hp(2),
    marginBottom: hp(4),
  },
  deleteButton: {
    marginTop: 'auto',
    backgroundColor: colors.primary,
    paddingVertical: hp(1.5),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(1),
  },
  deleteButtonText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.bold,
  },
});

export default styles;
