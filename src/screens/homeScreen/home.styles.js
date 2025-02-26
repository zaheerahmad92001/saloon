import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.appBG,

  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  headerBackground: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  headerCard: {
    // padding: 20,
    paddingHorizontal: 10,
    top: '10%',
    position: 'absolute',
  },
  headerText: {
    fontSize: 18,
    fontFamily: fontsFamily.bold,
    color: colors.white,
  },
  discountText: {
    fontSize: 24,
    fontFamily: fontsFamily.bold,
    color: colors.white,
  },
  subText: {
    fontSize: 14,
    fontFamily: fontsFamily.regular,
    color: colors.gray,
    marginBottom: 10,
  },
  bookButton: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fontsFamily.medium,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  sectionTitle: {
    fontFamily: fontsFamily.bold,
    color: colors.appBlack,
    fontWeight: '600',
    fontSize: RFValue(16),
    textAlign: 'left'
  },
  totalSalesTitle: {
    fontFamily: fontsFamily.bold,
    color: colors.appBlack,
    fontWeight: '600',
    fontSize: RFValue(16),
    textAlign: 'left',
    paddingTop: 10
  },
  dropDownView: {
    width: '100%'
  },
  seeAllText: {
    color: colors.primary,
    fontFamily: fontsFamily.medium,
  },

  contentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 0.5,
    // borderColor: colors.gray,
    width: wp(21),
  },
  catImageContainer: {
    width: 40,
    height: 40,
    marginBottom: 5,
    overflow: 'hidden',
  },
  categoryIcon: {
    width: null,
    height: null,
    flex: 1,
  },
  categoryText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    flexWrap: 'wrap',
  },
  placeholderContainer: {
    padding: 20,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 14,
    fontFamily: fontsFamily.regular,
    color: colors.gray,
  },
  imageContainer: {
    width: wp(92),
    height: hp(18),
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },

  totalBookingView: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 12,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 25,
    width: wp('43%')
  },

  lableText: {
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
  ValueText: {
    fontFamily: fontsFamily.medium,
    color: colors.appBlack,
    marginLeft: 6
  },
  textlableValueView: {
    marginLeft: 8,

  },
  overView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 7
  },
  mainGraphView: {
    flex:1,
     paddingVertical:20,
  },
  TradeUpView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5,
    backgroundColor:colors.confirmYellowLight,
    width:wp(15),
    borderRadius:5,
  },
  tradeText:{
    color:colors.confirmYellow
  },
  rowWrap:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  filterIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 7,
    gap: 5,
  },
  spaceBetween:{
    justifyContent:'space-between',
    marginHorizontal:wp(3),
  },
  tabView:{
    backgroundColor: 'white',
    marginTop: 20,
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    borderRadius:12,
    paddingVertical:5,
  },
  filterTextStyle: {
    fontWeight: '500',
    color: colors.lightBlack,
  }
  


});

export default styles;
