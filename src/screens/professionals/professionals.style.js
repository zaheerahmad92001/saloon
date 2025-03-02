import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container:{
    flex:1,
    backgroundColor:colors.appBG,
  },
  contentContainer:{
    flex:1,
    marginHorizontal:wp(4),
  },
  picker: {
    marginHorizontal: wp(4),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  sectionTitle: {
    color: colors.appBlack,
  },
  button: {
    marginBottom: hp(1),
  }
});
export default styles;
