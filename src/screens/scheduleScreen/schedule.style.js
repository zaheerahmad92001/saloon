import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal:wp(4),
  },
  rowContaner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:5,
  },
  dateText:{
    fontSize: RFValue(37),
  },
  dayText:{
    color:'#BBC0C3',
    fontSize:RFValue(13),
  },
  headerRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  todayText:{
    color:colors.sharpPrimary,
  },

  heading: {
    fontSize: RFValue(18),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginVertical: 10,
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    marginBottom: wp(18),
  },
  bookingsButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 10,
  },
  continueButton: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
  },
  bookingsText: {
    color: colors.white,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },
  continueText: {
    color: colors.primary,
    fontSize: RFValue(12),
    fontFamily: fontsFamily.semiBold,
  },

  headerContainer: {
    flex: 1,
    marginTop:hp(1.5),
  },
  header: {
    flexDirection: "row",
    gap:50,
  },
  headerText: {
    color:colors.lightBlack,
    fontWeight:'normal',
  },
  contentContainerStyle:{
    marginTop:hp(1.5),
  },
});

export default styles;
