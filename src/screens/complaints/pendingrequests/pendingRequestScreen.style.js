import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import fontsFamily from '../../../assets/fontsFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal:wp(4),
  },
  statusHeading: {
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(15),
  },
  HeaderView: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  filterView: {
    paddingTop:hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainerStyle:{
    marginTop:hp(2),
  }
});

export default styles;
