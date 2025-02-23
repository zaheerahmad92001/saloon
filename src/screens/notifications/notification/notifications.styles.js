import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'rgb(249,249,249)',
  },
  notifyContainer:{
    flex:1,
    marginHorizontal:wp(4),
  },
  titleHeading:{
    fontFamily: fontsFamily.bold,
    fontWeight: '400',
    color: colors.appBlack,
    fontSize:RFValue(12)
  },
  description:{
    fontFamily: fontsFamily.regular,
    fontWeight: '400',
    color: colors.lightBlack,
  },

  cardContainer: {
    paddingHorizontal:8,
    paddingVertical:12,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    gap:10,
    marginBottom:hp(2),
  },
  cardImageContainer: {
    backgroundColor: colors.lighterPrimary,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'flex-start',
  },
  cardImage: {
    width: 35,
    height: 35,
  },
  title: {
    color:colors.lightBlack,
    marginTop:hp(1),
    marginBottom:hp(2),
    fontFamily:fontsFamily.medium,
    fontWeight:'400',
    fontSize:RFValue(12)
  },
  titleContainer: {
    // marginLeft:wp(2),
  },
  subTitle: {
    fontFamily: fontsFamily.thin,
    fontSize: 16,
  },
  notify: {
    marginTop: wp(5),
  },
});

export default styles;
