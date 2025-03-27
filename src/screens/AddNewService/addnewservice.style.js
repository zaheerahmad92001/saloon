import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
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
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },

  headingText: {
    marginVertical: hp(1.5),
  },
  subContainer: {
    marginVertical: hp(1),
  },
  label: {
    marginBottom: 5,
  },

  label2: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.regular,
    marginBottom: 5,
  },
  input2: {
    borderRadius: 8,
    backgroundColor: colors.inputGray,
    marginBottom: 10,
    color: colors.lightBlack,
    fontSize: RFValue(9),
  },

  subServiceContainer: {
    // backgroundColor: colors.appBG,
    borderRadius: 10,
    paddingTop: 10,
    marginBottom: 15,
  },
  subServiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  subServiceTitle: {
    fontSize: RFValue(10),
    fontFamily: fontsFamily.regular,
  },
  input: {
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: colors.inputGray,
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(11),
  },
  priceDurationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceInput: {
    width: '48%',
    borderRadius: 8,
    backgroundColor: colors.inputGray,
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(11),
  },
  durationInput: {
    width: '48%',
    borderRadius: 8,
    backgroundColor: colors.inputGray,
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(11),
  },
  addMoreButton: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: wp(25),
    marginBottom:hp(3),
  },
  addMoreText: {
    color: colors.primary,
    fontSize: RFValue(12),
  },

  buttonStyle: {
    marginBottom: hp(1),
    marginHorizontal: wp(4),
  },
  dropDownStyle:{
    backgroundColor:colors.inputGray
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
});
export default styles;
