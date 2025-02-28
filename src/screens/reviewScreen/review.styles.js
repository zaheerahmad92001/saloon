import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: wp(5),
    backgroundColor: colors.appBG
  },
  title: {
    marginTop: hp(2.5)
  },
  customerReview: {
    marginBottom: hp(1.3),
    fontWeight:'normal'
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: colors.offWhite,
    marginTop: hp(1.7),
    marginBottom: hp(2),
  },
  
  reviewBox: {
    backgroundColor: colors.darkGray,
    minHeight: 130,
    borderRadius: 8,
    padding: 15
  },
  reviewText: {
    color: colors.lightBlack,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular
  },

});

export default styles;
