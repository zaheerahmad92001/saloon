import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import fontsFamily from '../../assets/fontsFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wraper: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  box: {
    width: wp(43),
    height: hp(11),
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp(2),
    gap: 10,
  },
  statusText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.appBlack,
    textAlign: 'center',
  },
  innerRoundedBox: {
    width: 40,
    height: 40,
    backgroundColor: colors.lighterPrimary,
    borderRadius: 25,
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerTextValue: {
    fontSize: RFValue(15),
    fontFamily: fontsFamily.regular,
    color: colors.primary,
    textAlign: 'center',
  },
  button: {
    marginBottom: Platform.OS === 'android' ? hp(2) : hp(1),
  },
  loaderView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
