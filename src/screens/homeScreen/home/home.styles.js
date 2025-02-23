import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fontsFamily from '../../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,

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
    marginVertical: hp(1),
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
    //  paddingHorizontal:30,
    //   paddingVertical:10,
    //    backgroundColor:colors.inputGray,
    //    borderRadius:8,
    //    borderWidth:0.5,
    //    borderColor:colors.lightBlack,
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
    //paddingBottom: 12,
    elevation: 6,

    shadowColor: colors.lightBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: wp('43%')
  },

  lableText: {
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    fontSize: RFValue(11)
  },
  ValueText: {
    fontFamily: fontsFamily.medium,
    color: colors.appBlack,
    fontSize: RFValue(13),
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
    paddingVertical: 10
  },
  mainGraphView: {
    flex:1,
    // elevation:6,
     paddingVertical:20,
    // shadowColor: colors.appBlack,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,


    // paddingLeft: 10,
    // elevation: 6,
    // paddingTop: 10,
    // shadowColor: colors.appBlack,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 5,
    // overflow: "hidden"

  }

});

export default styles;
