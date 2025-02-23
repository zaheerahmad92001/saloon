import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
  },
  flatListContainer: {
    backgroundColor: colors.appBG,
    paddingVertical: hp(1),
    marginBottom: hp(5),
  },

  imageContainer: {
    width: wp(92),
    height: hp(25),
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  icon: {
    backgroundColor: colors.lightPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 8,
    marginTop: 5,
    marginLeft: 10,
    width: 35,
    height: 35,
  },
  heading: {
    fontSize: RFValue(16),
    fontWeight: '600',
    color: colors.appBlack,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  description: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.regular,
    fontWeight: '400',
    color: colors.lightBlack,
  },
  locationContainer: {
    marginVertical: wp(3),
  },
  locationSubContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 1,
  },
  locationText: {
    textDecorationLine: 'underline',
    fontSize: RFValue(13),
    fontFamily: fontsFamily.Pregular,
    color: colors.primary,
    fontWeight: '500',
    marginLeft: 5,
  },
  timeText: {
    fontSize: RFValue(13),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
    fontWeight: '500',
    marginLeft: 5,
  },
  continueText: {
    color: colors.white,
    fontSize: RFValue(14),
    fontFamily: fontsFamily.bold,
    textAlign: 'center',
  },
  continueButton: {
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
  },
  footer: {
    marginVertical: hp(1),
  },

  calloutContainer: {
    position:'absolute',
    paddingHorizontal:wp(2),
    paddingVertical:hp(0.5),
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf:'center',
    top:'18%',
    left:'52%',
  },
  calloutTitle: {
    fontFamily: fontsFamily.regular,
    fontWeight:'500',
    fontSize: RFValue(13),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:hp(1.7),
  },
  seeAllText: {
    color: colors.primary,
    fontFamily: fontsFamily.medium,
  },
  mapContainer:{
    width: '100%',
    height: hp(25),
    borderRadius: 10,
    overflow:'hidden',
  },
  mapImage: {
    width:null,
    height:null,
    flex:1,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  }
  
});
export default styles;
