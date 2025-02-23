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
    marginBottom: heightPercentageToDP(2),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  date: {
    fontSize: RFValue(11),
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    fontWeight: '500',
    fontSize:RFValue(11)
  },
  status: {
    fontSize: RFValue(12),
    color: colors.gray,
    backgroundColor: colors.appBlack,
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

  priceandname: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    
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
    fontFamily: fontsFamily.medium,
    color:colors.appBlack
  },
  professional: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    marginVertical: 2,
    fontFamily: fontsFamily.regular,
  },
  professionalMainView: {
    backgroundColor:colors.darkGray,
    paddingVertical:3,
    paddingHorizontal:10,
    borderRadius:8,
  },
  professionalView: {
    gap:5,
    flexDirection:'row',
    alignItems:'center'
  },
  services: {
    fontSize: RFValue(12),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
  priceContainer: {
    backgroundColor: colors.lightPrimary,
    paddingVertical: 7,
    paddingHorizontal: 7,
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
    padding: 6,
    borderRadius: 5,
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap:10
    
  },
  cancelButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: colors.lightPrimary,//'transparent',
    borderWidth:0
  },
  cancelText: {
    color: colors.primary,
    fontSize:RFValue(11),
    fontFamily: fontsFamily.regular,
    paddingVertical:3,
  },
  


  cancelBookingButton: {
    flex: 1,
    marginRight: 5,
    marginTop:10,
    backgroundColor: 'transparent',
  },
  cancelBookingText: {
    paddingVertical:3,
    color: colors.primary,
    fontSize:RFValue(11),
    fontFamily: fontsFamily.regular,
  },



  rescheduleButton: {
    flex: 1,
    //marginLeft: 5,
  },
  rescheduleText: {
    fontSize: RFValue(11),
    color: '#fff',
    fontFamily: fontsFamily.regular,
    paddingVertical:3,
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
    marginTop: 5,
    borderRadius: 5,
  },
  reportText: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
});
export default styles;
