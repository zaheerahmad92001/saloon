import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: heightPercentageToDP(1),
  },
  cardTopPadding:{
    paddingTop:5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
titleContainer:{
  flexDirection: 'row',
   alignItems: 'flex-start'
  },
  serviceContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  date: {
    color: colors.appBlack,
  },
  status: {
    fontSize: RFValue(12),
    color: colors.gray,
    backgroundColor: colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    fontFamily: fontsFamily.regular,
  },
  confirmed: {
    backgroundColor: colors.confirmYellowLight,
    color: colors.confirmYellow,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontFamily: fontsFamily.regular,
  },
  location: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    marginVertical: 2,
    fontFamily: fontsFamily.regular,
  },
  services: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
    fontWeight:'normal',
  },
  priceContainer: {
    backgroundColor: colors.lightPrimary,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  price: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: colors.primary,
    fontFamily: fontsFamily.regular,
  },
  icon: {
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    padding: 4,
    borderRadius: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: 'transparent',
  },
  cancelText: {
    color: colors.primary,
  },
  rescheduleButton: {
    flex: 1,
    marginLeft: 5,
  },
  rescheduleText: {
    fontSize: RFValue(12),
    color: '#fff',
    fontFamily: fontsFamily.regular,
  },

  pendingStatus: {
    backgroundColor: colors.lightGray,
    color: colors.appBlack,
  },
  cancelledStatus: {
    backgroundColor: colors.lightError,
    color: colors.error,
  },
  completedStatus: {
    backgroundColor: colors.lightSuccess,
    color: colors.success,
  },
  completedButton: {
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
  reportText: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
});
export default styles;
