import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: wp(4),
  },
  chatContainer: {},
  dividerView: {
    width: '100%',
    height: 1,
    backgroundColor: colors.gray,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: Platform.OS === 'ios' ? 0 : 15,
  },
  inputMainView: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    borderRadius: 8,
    paddingRight: 15,
    paddingLeft: 12,
    paddingVertical: 5,
  },
  input: {
    fontFamily: fontsFamily.regular,
    fontWeight: '400',
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  sendButton: {
    marginLeft: 10,
  },
});
export default style;
