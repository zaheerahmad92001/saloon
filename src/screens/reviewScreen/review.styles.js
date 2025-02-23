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
    backgroundColor: colors.appBG1
  },
  headerTitle: {
    marginTop: hp(1.3),
    fontSize: RFValue(15),
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
  },

  title: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
    fontWeight: '500',
    marginTop: hp(4)
  },
  customerReview: {
    marginBottom: hp(1.3),
    marginTop: hp(2),
    fontFamily:fontsFamily.medium
  },
  border: {
    width: '100%',
    height: 1,
    backgroundColor: colors.offWhite,
    marginTop: hp(1.7),
    marginBottom: hp(2),
  },
  textStyle: {
    color: colors.appBlack,
    fontFamily: fontsFamily.extraLight,
    fontSize: RFValue(13),
    fontWeight: '500',
    marginBottom: hp(1.3),
  },



  question: {
    fontSize: RFValue(14),
    marginBottom: 10,
    fontFamily: fontsFamily.regular,
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    marginLeft: 2,
    fontSize: RFValue(12), // Updated to RFValue
  },
  buttons: {
    marginTop: 'auto', // Push buttons to the bottom
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  submitButton: {
    backgroundColor: '#d28ba7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  submitText: {
    color: colors.white,
    fontSize: RFValue(12),
    textAlign: 'center',
    fontFamily: fontsFamily.semiBold,
  },
  cancelButton: {
    marginTop: hp(2),
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
  },
  cancelText: {
    fontSize: RFValue(12),
    textAlign: 'center',
    fontFamily: fontsFamily.semiBold,
  },
  inputStyle: {
    minHeight: 130,
    textAlignVertical: 'top',
    fontSize: RFValue(14),
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
  }

});

export default styles;
