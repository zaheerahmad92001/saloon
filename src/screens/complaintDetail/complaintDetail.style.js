import {StyleSheet} from 'react-native';
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
  filterIconView:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:colors.darkGray,
    paddingVertical:10,
    paddingHorizontal:12,
    borderRadius:7,
    gap:5,
  },
  contentContainerStyle:{
    marginTop:hp(2),
  },
  textStyle:{
    fontWeight:'500',
    color:colors.lightBlack,
  }
});

export default styles;
