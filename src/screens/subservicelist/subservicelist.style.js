import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';
import {widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
  },

  subServiceContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  subServiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  saveButton: {
    backgroundColor: '#c89aa0',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  collapsedSubServiceContainer: {
    borderWidth: 1,
    borderColor: colors.darkGray,
    backgroundColor: colors.white,
  },
  buttonStyle: {
    // marginTop: 30,
    marginHorizontal:wp(4),
    marginBottom:hp(Platform.OS === 'android'? 1 : 0),
  },
  DeleteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:hp(1.5),
  },
  DeleteText: {
    color: colors.red,
    fontsFamily: fontsFamily.regular,
    fontSize: RFValue(12),
  },
  bottomSheetColor: {
    backgroundColor: colors.appBG,
  },
});

export default styles;
