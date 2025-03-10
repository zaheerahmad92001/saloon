import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.appBG,
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  reviewText: {
    fontFamily: fontsFamily.bold,
    fontWeight: '500',
    fontSize: RFValue(12),
  },
  card: {
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  ratintTxt: {
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(12),
    fontWeight: 'normal',
    paddingVertical: 3,
    color: colors.lightBlack,
  },
  nameText: {
    color: colors.primary,
    fontWeight: '500',
  },
  starContainer: {
    flexDirection: 'row',
  },
  starView: {
    padding: 4,
  },
  imageContainer: {
    width: 52,
    height: 52,
    borderRadius: 5.5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  imageStyle: {
    width: null,
    height: null,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontWeight: '500',
  },
  contentContainerStyle: {
    marginTop: hp(1),
  },
});

export default style;
